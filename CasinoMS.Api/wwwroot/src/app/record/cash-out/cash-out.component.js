import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';
let CashOutComponent = class CashOutComponent {
    constructor(fb, toastr, transactionService, ngxService, userService, globalService) {
        this.fb = fb;
        this.toastr = toastr;
        this.transactionService = transactionService;
        this.ngxService = ngxService;
        this.userService = userService;
        this.globalService = globalService;
        this.loaderList = [];
        this.isCashOutForOtherLoader = false;
        this.cashOutButtonText = "Cash-Out for other Loader";
        //#endregion
        this.isFormDirty = new EventEmitter();
        this.playerUserNameValMessages = {
            required: "Please enter your player username.",
            maxlength: "Player username can't exceed 20 characters."
        };
        this.referenceNoValMessages = {
            required: "Please enter transaction's reference number.",
            maxlength: "Reference number can't exceed 30 digits."
        };
        this.amountValMessages = {
            required: "Please enter transaction's amount.",
            maxlength: "Amount can't exceed 20 digits.",
            pattern: "Amount is invalid."
        };
        this.constants = new Constants();
    }
    ngOnInit() {
        this.globalService.redirectUnauthorizedUser();
        this.transactionDetailsForm = this.fb.group({
            transactionType: ['Cash-Out'],
            loaderList: [''],
            playerUserName: ['', [Validators.maxLength(20)]],
            referenceNo: ['', [Validators.required, Validators.maxLength(30)]],
            amount: ['', [Validators.required, Validators.maxLength(20), Validators.pattern(/\-?\d*\.?\d{1,2}/)]]
        });
        const playerUserNameControl = this.transactionDetailsForm.get(this.constants.playerUserName);
        playerUserNameControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(playerUserNameControl, this.constants.playerUserName));
        const referenceNoControl = this.transactionDetailsForm.get(this.constants.referenceNo);
        referenceNoControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
            this.setMessage(referenceNoControl, this.constants.referenceNo);
            this.verifyReferenceNumber(value);
        });
        const amountControl = this.transactionDetailsForm.get(this.constants.amount);
        amountControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => this.setMessage(amountControl, this.constants.amount));
        this.transactionDetailsForm.valueChanges.subscribe(value => this.isFormDirty.emit(true));
        this.userService.getAllLoaderUsersByTeam().subscribe((data) => {
            data.forEach(user => {
                this.loaderList.push(user.alias);
            });
        });
    }
    verifyReferenceNumber(value) {
        this.transactionService.getTransactionDetailsByReferenceNo(value).subscribe({
            next: transactionDetail => this.referenceNumberChecker(transactionDetail),
            error: err => this.errorMessage = err
        });
    }
    referenceNumberChecker(transactionDetail) {
        this.referenceNoVerificationMessage = null;
        if (transactionDetail != null && transactionDetail.referenceNo != null) {
            this.referenceNoVerificationMessage = "This reference number is already recorded. Please double check.";
        }
    }
    setMessage(c, validationType) {
        if (validationType == this.constants.playerUserName) {
            this.playerUserNameMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.playerUserNameMessage = Object.keys(c.errors).map(key => this.playerUserNameValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.referenceNo) {
            this.referenceNoMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.referenceNoMessage = Object.keys(c.errors).map(key => this.referenceNoValMessages[key]).join(' ');
            }
        }
        else if (validationType == this.constants.amount) {
            this.amountMessage = "";
            if ((c.touched || c.dirty) && c.errors) {
                this.amountMessage = Object.keys(c.errors).map(key => this.amountValMessages[key]).join(' ');
            }
        }
    }
    setTransactionDetailsValue(transactionDetailsForm) {
        return {
            id: "",
            transactionId: "",
            transactionType: transactionDetailsForm.get("transactionType").value,
            playerUserName: transactionDetailsForm.get("playerUserName").value,
            referenceNo: transactionDetailsForm.get("referenceNo").value,
            amount: transactionDetailsForm.get("amount").value,
            submittedBy: transactionDetailsForm.get("loaderList").value,
            submittedDate: "",
            fullName: "",
            userName: "",
            userId: ""
        };
    }
    setCashOutForOtherLoader() {
        if (!this.isCashOutForOtherLoader) {
            this.isCashOutForOtherLoader = true;
            this.cashOutButtonText = "Cash-Out using my Account";
        }
        else {
            this.isCashOutForOtherLoader = false;
            this.cashOutButtonText = "Cash-Out for other Loader";
        }
    }
    submitTransactionDetailsForm() {
        if (this.isCashOutForOtherLoader &&
            (this.transactionDetailsForm.get("loaderList").value == null || this.transactionDetailsForm.get("loaderList").value == "")) {
            this.toastr.error("Please choose another loader.", "CASH-OUT TRANSACTION");
        }
        else {
            this.ngxService.start();
            if (this.transactionDetailsForm.valid) {
                if (this.transactionDetailsForm.dirty) {
                    this.transactionService.submitTransactionDetails(this.setTransactionDetailsValue(this.transactionDetailsForm)).subscribe({
                        next: () => this.onSaveComplete(),
                        error: err => this.errorMessage = err
                    });
                }
            }
        }
    }
    onSaveComplete() {
        this.transactionDetailsForm.reset();
        this.transactionDetailsForm.get("transactionType").setValue("Cash-Out");
        this.isFormDirty.emit(false);
        this.toastr.success("Transaction submitted successfully.", "CASH-OUT TRANSACTION");
        this.ngxService.stop();
    }
    resetForm(form) {
        form.reset();
        form.get("transactionType").setValue("Cash-Out");
    }
};
__decorate([
    Output()
], CashOutComponent.prototype, "isFormDirty", void 0);
CashOutComponent = __decorate([
    Component({
        selector: 'app-cash-out',
        templateUrl: './cash-out.component.html',
        styleUrls: ['./cash-out.component.scss']
    })
], CashOutComponent);
export { CashOutComponent };
//# sourceMappingURL=cash-out.component.js.map