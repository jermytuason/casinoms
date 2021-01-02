import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Constants } from 'src/app/shared/constants';
import { Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
let RegistrationComponent = class RegistrationComponent {
    constructor(fb, userService, definitionService, globalService, router, ngxService) {
        this.fb = fb;
        this.userService = userService;
        this.definitionService = definitionService;
        this.globalService = globalService;
        this.router = router;
        this.ngxService = ngxService;
        this.teamList = [];
        this.userTypeList = [];
        //#endregion
        this.isFormDirty = new EventEmitter();
        this.firstNameValMessages = {
            required: "Please enter your first name.",
            maxlength: "First name can't exceed 20 characters."
        };
        this.lastNameValMessages = {
            required: "Please enter your last name.",
            maxlength: "Last name can't exceed 20 characters."
        };
        this.aliasValMessages = {
            required: "Please enter your Alias.",
            maxlength: "Alias can't exceed 20 characters."
        };
        this.teamsValMessages = {
            required: "Please choose your team.",
        };
        this.userTypesValMessages = {
            required: "Please choose your user type.",
        };
        this.emailAddressValMessages = {
            required: "Please enter your e-mail address.",
            email: "Please enter a valid e-mail address.",
            maxlength: "E-mail address can't exceed 50 characters."
        };
        this.userNameValMessages = {
            required: "Please enter your username.",
            maxlength: "Username can't exceed 20 characters.",
            pattern: "Username is invalid."
        };
        this.passwordValMessages = {
            required: "Please enter your password.",
            maxlength: "Password can't exceed 20 characters.",
            minlength: "Password should have a minimum of 5 characters."
        };
        this.confirmPasswordValMessages = {
            required: "Please confirm your password."
        };
        this.constants = new Constants();
    }
    ngOnInit() {
        if (this.globalService.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
        this.registrationForm = this.fb.group({
            firstName: ['', [Validators.required, Validators.maxLength(20)]],
            lastName: ['', [Validators.required, Validators.maxLength(20)]],
            alias: ['', [Validators.required, Validators.maxLength(30)]],
            emailAddress: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
            userName: ['', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[a-zA-Z0-9_-]+$/)]],
            teams: ['', [Validators.required]],
            userTypes: ['', [Validators.required]],
            passwordGroup: this.fb.group({
                password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
                confirmPassword: ['', [Validators.required]],
            }, { validator: this.passwordMatcher })
        });
        const firstNameControl = this.registrationForm.get(this.constants.firstName);
        firstNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(firstNameControl, this.constants.firstName));
        const lastNameControl = this.registrationForm.get(this.constants.lastName);
        lastNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(lastNameControl, this.constants.lastName));
        const aliasControl = this.registrationForm.get(this.constants.alias);
        aliasControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(aliasControl, this.constants.alias));
        const teamsControl = this.registrationForm.get(this.constants.teams);
        teamsControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(teamsControl, this.constants.teams));
        const userTypesControl = this.registrationForm.get(this.constants.userTypes);
        userTypesControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(userTypesControl, this.constants.userTypes));
        const emailAddressControl = this.registrationForm.get(this.constants.emailAddress);
        emailAddressControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(emailAddressControl, this.constants.emailAddress));
        const userNameControl = this.registrationForm.get(this.constants.userName);
        userNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
            this.setMessage(userNameControl, this.constants.userName);
            this.verifyUserName(value);
        });
        const passwordControl = this.registrationForm.get("passwordGroup.password");
        passwordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(passwordControl, this.constants.password));
        const confirmPasswordControl = this.registrationForm.get("passwordGroup.confirmPassword");
        confirmPasswordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(confirmPasswordControl, this.constants.confirmPassword));
        this.registrationForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
        this.definitionService.getTeams().subscribe((data) => {
            data.forEach(types => {
                this.teamList.push(types.description);
            });
        });
        this.definitionService.getUserTypes().subscribe((data) => {
            data.forEach(types => {
                this.userTypeList.push(types.description);
            });
        });
    }
    verifyUserName(value) {
        this.userService.getUserByUserName(value).subscribe({
            next: userDetail => this.userNameChecker(userDetail),
            error: err => this.errorMessage = err
        });
    }
    userNameChecker(userNameDetail) {
        this.userNameVerificationMessage = null;
        if (userNameDetail != null && userNameDetail.userId != null) {
            this.userNameVerificationMessage = "This username is already taken. Please choose another username.";
        }
    }
    passwordMatcher(c) {
        const passwordControl = c.get("password");
        const confirmPasswordControl = c.get("confirmPassword");
        if (passwordControl.pristine || confirmPasswordControl.pristine) {
            return null;
        }
        if (passwordControl.value == confirmPasswordControl.value) {
            return null;
        }
        return { 'match': true };
    }
    setMessage(c, validationType) {
        if (validationType == this.constants.firstName) {
            this.firstNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.firstNameMessage = Object.keys(c.errors).map(key => this.firstNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.lastName) {
            this.lastNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.lastNameMessage = Object.keys(c.errors).map(key => this.lastNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.alias) {
            this.aliasMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.aliasMessage = Object.keys(c.errors).map(key => this.aliasValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.teams) {
            this.teamsMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.teamsMessage = Object.keys(c.errors).map(key => this.teamsValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.userTypes) {
            this.userTypesMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.userTypesMessage = Object.keys(c.errors).map(key => this.userTypesValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.emailAddress) {
            this.emailAddressMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.emailAddressMessage = Object.keys(c.errors).map(key => this.emailAddressValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.userName) {
            this.userNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.userNameMessage = Object.keys(c.errors).map(key => this.userNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.password) {
            this.passwordMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.passwordMessage = Object.keys(c.errors).map(key => this.passwordValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.confirmPassword) {
            this.confirmPasswordMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.confirmPasswordMessage = Object.keys(c.errors).map(key => this.confirmPasswordValMessages[key]).join(' ');
            }
        }
    }
    setUserValue(userForm) {
        return {
            firstName: userForm.get("firstName").value,
            lastName: userForm.get("lastName").value,
            alias: userForm.get("alias").value,
            teamName: userForm.get("teams").value,
            emailAddress: userForm.get("emailAddress").value,
            userName: userForm.get("userName").value,
            password: userForm.get("passwordGroup.confirmPassword").value,
            userType: userForm.get("userTypes").value,
            userId: "",
            isActive: false
        };
    }
    registerForm() {
        if (this.registrationForm.valid) {
            if (this.registrationForm.dirty) {
                this.ngxService.start();
                this.userService.createUser(this.setUserValue(this.registrationForm)).subscribe({
                    next: () => this.onSaveComplete(),
                    error: err => this.errorMessage = err
                });
            }
        }
    }
    onSaveComplete() {
        // Reset the form to clear the flags
        this.registrationForm.reset();
        this.isFormDirty.emit(false);
        alert("Thank you for your registration at Casino MS! We have sent a verification on your registered e-mail.");
        this.ngxService.stop();
        this.router.navigate(['/user/login']);
    }
};
__decorate([
    Output()
], RegistrationComponent.prototype, "isFormDirty", void 0);
RegistrationComponent = __decorate([
    Component({
        selector: 'app-registration',
        templateUrl: './registration.component.html',
        styleUrls: ['./registration.component.scss']
    })
], RegistrationComponent);
export { RegistrationComponent };
//# sourceMappingURL=registration.component.js.map