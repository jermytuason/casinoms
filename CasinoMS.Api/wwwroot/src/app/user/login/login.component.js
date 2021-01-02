import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';
let LoginComponent = class LoginComponent {
    constructor(fb, globalService, loginService, router, toastr, userService, ngxService, modalService) {
        this.fb = fb;
        this.globalService = globalService;
        this.loginService = loginService;
        this.router = router;
        this.toastr = toastr;
        this.userService = userService;
        this.ngxService = ngxService;
        this.modalService = modalService;
        this.headerText = 'Find new local restaurants and independent home cooks';
        this.subHeaderText = 'Tired of the common restaurants you see? Try new local foods, homemade foods and more';
        this.isFormDirty = new EventEmitter();
        this.userNameValMessages = {
            required: "Please enter your username.",
            pattern: "Username is invalid."
        };
        this.userNameValMessagesFP = {
            required: "Please enter your username.",
            pattern: "Username is invalid."
        };
        this.passwordValMessages = {
            required: "Please enter your password.",
        };
        this.emailAddressValMessages = {
            required: "Please enter your e-mail address.",
            email: "Please enter a valid e-mail address.",
            maxlength: "E-mail address can't exceed 50 characters."
        };
        this.constants = new Constants();
        this.globalService.setCurrentPage("login");
    }
    ngOnInit() {
        if (this.globalService.isAuthenticated()) {
            this.router.navigate(['/home']);
        }
        this.loginForm = this.fb.group({
            userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]+$/)]],
            password: ['', [Validators.required]]
        });
        this.forgotPasswordForm = this.fb.group({
            userName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]+$/)]],
            emailAddress: ['', [Validators.required, Validators.email, Validators.maxLength(50)]]
        });
        const userNameControl = this.loginForm.get(this.constants.userName);
        userNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
            this.setMessage(userNameControl, this.constants.userName);
            this.verifyUserName("Login", value);
        });
        const passwordControl = this.loginForm.get(this.constants.password);
        passwordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(passwordControl, this.constants.password));
        const userNameControlFP = this.forgotPasswordForm.get(this.constants.userName);
        userNameControlFP.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
            this.setMessageForgotPassword(userNameControlFP, this.constants.userName);
            this.verifyUserName("Forgot Password", value);
        });
        const emailAddressControl = this.forgotPasswordForm.get(this.constants.emailAddress);
        emailAddressControl === null || emailAddressControl === void 0 ? void 0 : emailAddressControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessageForgotPassword(emailAddressControl, this.constants.emailAddress));
        this.loginForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
        this.forgotPasswordForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
    }
    verifyUserName(forControl, value) {
        this.userService.getActiveUserByUserName(value).subscribe({
            next: userDetail => this.userNameChecker(forControl, userDetail),
            error: err => this.errorMessage = err
        });
    }
    userNameChecker(forControl, userDetail) {
        if (forControl == "Login") {
            this.userNameVerificationMessage = null;
            if (userDetail != null && userDetail.userId != null && userDetail.isActive == false) {
                if (userDetail.userType == 'Loader') {
                    this.userNameVerificationMessage = "This Loader Account is not yet active. Please contact your Financer.";
                }
                else if (userDetail.userType == 'Financer') {
                    this.userNameVerificationMessage = "This Financer Account is not yet active. Please contact the system administrator";
                }
            }
        }
        else if (forControl == "Forgot Password") {
            this.userNameVerificationMessageFP = null;
            if (userDetail != null && userDetail.userId != null && userDetail.isActive == false) {
                if (userDetail.userType == 'Loader') {
                    this.userNameVerificationMessageFP = "This Loader Account is not yet active. Please contact your Financer.";
                }
                else if (userDetail.userType == 'Financer') {
                    this.userNameVerificationMessageFP = "This Financer Account is not yet active. Please contact the system administrator";
                }
            }
        }
    }
    setMessage(c, validationType) {
        if (validationType == this.constants.userName) {
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
    }
    setMessageForgotPassword(c, validationType) {
        if (validationType == this.constants.userName) {
            this.userNameMessageFP = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.userNameMessageFP = Object.keys(c.errors).map(key => this.userNameValMessagesFP[key]).join(' ');
            }
        }
        else if (validationType == this.constants.emailAddress) {
            this.emailAddressMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.emailAddressMessage = Object.keys(c.errors).map(key => this.emailAddressValMessages[key]).join(' ');
            }
        }
    }
    setLoginValue(loginCustomerForm) {
        return {
            userName: loginCustomerForm.get("userName").value,
            password: loginCustomerForm.get("password").value,
        };
    }
    loginUser() {
        this.ngxService.start();
        if (this.loginForm.valid) {
            if (this.loginForm.dirty) {
                this.loginService.loginUser(this.setLoginValue(this.loginForm)).subscribe({
                    next: (res) => {
                        localStorage.setItem('token', res.token);
                        localStorage.setItem('isAuthenticated', "true");
                        this.globalService.setUserLoggedIn(true);
                        this.userService.getUserProfile().subscribe({
                            next: user => this.setUserDetails(user),
                            error: err => console.log(err)
                        });
                        this.router.navigate(['/home']);
                        this.toastr.success("Welcome to Casino MS", "Login Successfully");
                    },
                    error: err => this.errorHandler(err)
                });
            }
        }
    }
    setUserDetails(user) {
        localStorage.setItem('fullName', user.firstName + ' ' + user.lastName);
        localStorage.setItem('UserType', user.userType);
        this.ngxService.stop();
    }
    setForgotPasswordValue(forgotPasswordForm) {
        return {
            userName: forgotPasswordForm.get("userName").value,
            emailAddress: forgotPasswordForm.get("emailAddress").value,
        };
    }
    forgotPassword() {
        if (this.forgotPasswordForm.valid) {
            if (this.forgotPasswordForm.dirty) {
                this.ngxService.start();
                this.userService.resetPassword(this.setForgotPasswordValue(this.forgotPasswordForm)).subscribe({
                    next: () => this.onResetPasswordComplete(),
                    error: err => this.errorMessage = err
                });
            }
        }
    }
    onResetPasswordComplete() {
        // Reset the form to clear the flags
        this.forgotPasswordForm.reset();
        alert("We have reset your password! Kindly check your registered e-mail and please don't forget to change the default password.");
        this.modalRef.close();
        this.ngxService.stop();
    }
    errorHandler(message) {
        if (message.includes("400")) {
            this.toastr.error("Incorrect Username or Password", "AUTHENTICATION FAILED");
        }
        else {
            console.log(message);
        }
        this.ngxService.stop();
    }
    open(content) {
        this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.modalRef.result.then((result) => {
            this.forgotPasswordForm.reset();
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.forgotPasswordForm.reset();
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        this.forgotPasswordForm.reset();
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        }
        else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
};
__decorate([
    Output()
], LoginComponent.prototype, "isFormDirty", void 0);
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.scss']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map