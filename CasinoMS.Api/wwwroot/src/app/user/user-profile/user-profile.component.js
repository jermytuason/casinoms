import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';
let UserProfileComponent = class UserProfileComponent {
    constructor(userService, globalService, router, fb, modalService, ngxService, toastr) {
        this.userService = userService;
        this.globalService = globalService;
        this.router = router;
        this.fb = fb;
        this.modalService = modalService;
        this.ngxService = ngxService;
        this.toastr = toastr;
        this.pageTitle = 'User Profile';
        this.errorMessage = '';
        this.user = {
            firstName: "",
            lastName: "",
            emailAddress: "",
            password: "",
            userType: "",
            userId: "",
            alias: "",
            teamName: "",
            userName: "",
            isActive: null
        };
        this.isFormDirty = new EventEmitter();
        this.currentPasswordValMessages = {
            required: "Please enter your current password.",
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
        this.globalService.redirectUnauthorizedUser();
        this.userService.getUserProfile().subscribe({
            next: user => this.user = user,
            error: err => this.errorMessage = err
        });
        this.changePasswordForm = this.fb.group({
            currentPassword: ['', [Validators.required]],
            passwordGroup: this.fb.group({
                password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
                confirmPassword: ['', [Validators.required]],
            }, { validator: this.passwordMatcher })
        });
        const currentPasswordControl = this.changePasswordForm.get(this.constants.currentPassword);
        currentPasswordControl === null || currentPasswordControl === void 0 ? void 0 : currentPasswordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(currentPasswordControl, this.constants.currentPassword));
        const passwordControl = this.changePasswordForm.get("passwordGroup.password");
        passwordControl === null || passwordControl === void 0 ? void 0 : passwordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(passwordControl, this.constants.password));
        const confirmPasswordControl = this.changePasswordForm.get("passwordGroup.confirmPassword");
        confirmPasswordControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(confirmPasswordControl, this.constants.confirmPassword));
        this.changePasswordForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
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
        if (validationType == this.constants.currentPassword) {
            this.currentPasswordMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.currentPasswordMessage = Object.keys(c.errors).map(key => this.currentPasswordValMessages[key]).join(' ');
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
    updateInformation() {
    }
    changePassword() {
        if (this.changePasswordForm.valid) {
            if (this.changePasswordForm.dirty) {
                this.ngxService.start();
                this.userService.changePassword(this.setChangePasswordValue(this.changePasswordForm)).subscribe({
                    next: () => this.onChangePasswordComplete(),
                    error: err => this.errorHandler(err)
                });
            }
        }
    }
    setChangePasswordValue(changePasswordForm) {
        return {
            userName: this.user.userName,
            currentPassword: changePasswordForm.get("currentPassword").value,
            newPassword: changePasswordForm.get("passwordGroup.password").value,
        };
    }
    onChangePasswordComplete() {
        // Reset the form to clear the flags
        this.changePasswordForm.reset();
        this.toastr.success("You have successfully changed your password.", "CHANGE PASSWORD");
        this.modalRef.close();
        this.ngxService.stop();
    }
    open(content) {
        this.modalRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
        this.modalRef.result.then((result) => {
            this.changePasswordForm.reset();
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.changePasswordForm.reset();
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    getDismissReason(reason) {
        this.changePasswordForm.reset();
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
    errorHandler(message) {
        if (message.includes("400")) {
            this.toastr.error("Your current password is incorrect.", "CHANGE PASSWORD");
            this.changePasswordForm.reset();
        }
        else {
            console.log(message);
        }
        this.ngxService.stop();
    }
};
__decorate([
    Output()
], UserProfileComponent.prototype, "isFormDirty", void 0);
UserProfileComponent = __decorate([
    Component({
        selector: 'app-user-profile',
        templateUrl: './user-profile.component.html',
        styleUrls: ['./user-profile.component.scss']
    })
], UserProfileComponent);
export { UserProfileComponent };
//# sourceMappingURL=user-profile.component.js.map