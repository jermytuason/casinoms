import { __decorate } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Constants } from 'src/app/shared/constants';
let CashInComponent = class CashInComponent {
    constructor(fb, toastr, transactionService, ngxService, userService, globalService) {
        this.fb = fb;
        this.toastr = toastr;
        this.transactionService = transactionService;
        this.ngxService = ngxService;
        this.userService = userService;
        this.globalService = globalService;
        this.loaderList = [];
        this.isCashInForOtherLoader = false;
        this.cashInButtonText = "Cash-In for other Loader";
        //#endregion
        this.isFormDirty = new EventEmitter();
        this.playerUserNameValMessages = {
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
            transactionType: ['Cash-In'],
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
            this.referenceNoVerificationMessage = "This reference number is already recorded. Please verify with the player.";
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
    setCashInForOtherLoader() {
        if (!this.isCashInForOtherLoader) {
            this.isCashInForOtherLoader = true;
            this.cashInButtonText = "Cash-In using my Account";
        }
        else {
            this.isCashInForOtherLoader = false;
            this.cashInButtonText = "Cash-In for other Loader";
        }
    }
    submitTransactionDetailsForm() {
        if (this.isCashInForOtherLoader &&
            (this.transactionDetailsForm.get("loaderList").value == null || this.transactionDetailsForm.get("loaderList").value == "")) {
            this.toastr.error("Please choose another loader.", "CASH-IN TRANSACTION");
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
        this.isCashInForOtherLoader = false;
        this.transactionDetailsForm.reset();
        this.transactionDetailsForm.get("transactionType").setValue("Cash-In");
        this.isFormDirty.emit(false);
        this.toastr.success("Transaction submitted successfully.", "CASH-IN TRANSACTION");
        this.ngxService.stop();
    }
    resetForm(form) {
        this.isCashInForOtherLoader = false;
        form.reset();
        form.get("transactionType").setValue("Cash-In");
    }
};
__decorate([
    Output()
], CashInComponent.prototype, "isFormDirty", void 0);
CashInComponent = __decorate([
    Component({
        selector: 'app-cash-in',
        templateUrl: './cash-in.component.html',
        styleUrls: ['./cash-in.component.scss']
    })
], CashInComponent);
export { CashInComponent };
//# sourceMappingURL=cash-in.component.js.map