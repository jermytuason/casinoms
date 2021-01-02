import { __decorate } from "tslib";
import { Component } from '@angular/core';
let MyTransactionsComponent = class MyTransactionsComponent {
    constructor(transactionService, toastr, ngxService, globalService) {
        this.transactionService = transactionService;
        this.toastr = toastr;
        this.ngxService = ngxService;
        this.globalService = globalService;
        this.p = 1;
        this.transactionDetails = [];
        this.errorMessage = '';
        this.showDateInput = false;
        this.isFilterSuccess = false;
        this.filterAmount = { count: 0 };
    }
    ngOnInit() {
        this.globalService.redirectUnauthorizedUser();
        this.showSpinner = true;
        this.transactionService.getTransactionDetailsByUserId().subscribe({
            next: transactionDetails => this.transactionDetails = this.onComplete(transactionDetails),
            error: err => this.errorMessage = err
        });
    }
    searchValueChange(val) {
        if (val == "") {
            if (!this.isFilterSuccess) {
                this.transactionService.getTransactionDetails().subscribe({
                    next: transactionDetails => this.transactionDetails = this.onComplete(transactionDetails),
                    error: err => this.errorMessage = err
                });
            }
            else {
                this.transactionService.getTransactionDetailsByDates(this.startDate, this.endDate).subscribe({
                    next: transactionDetails => this.transactionDetails = this.onFilterComplete(transactionDetails),
                    error: err => this.errorMessage = err
                });
            }
        }
    }
    toggleDateInput() {
        this.showDateInput = !this.showDateInput;
    }
    filterByDate() {
        if (!this.startDate || !this.endDate) {
            this.toastr.error("Please fill out the dates to be filtered.", "Date Input Error");
        }
        else if (this.startDate > this.endDate) {
            this.toastr.error("End Date can't be greater then Start Date", "Date Input Error");
            this.startDate = null;
            this.endDate = null;
        }
        else {
            this.transactionDetails = null;
            this.showSpinner = true;
            this.transactionService.getTransactionDetailsByDates(this.startDate, this.endDate).subscribe({
                next: transactionDetails => this.transactionDetails = this.onFilterComplete(transactionDetails),
                error: err => this.errorMessage = err
            });
        }
    }
    onComplete(transactionDetails) {
        this.filterAmount.count = this.computeTotalAmount(transactionDetails);
        this.showSpinner = false;
        return transactionDetails;
    }
    onFilterComplete(transactionDetails) {
        this.filterAmount.count = this.computeTotalAmount(transactionDetails);
        this.isFilterSuccess = true;
        this.showSpinner = false;
        return transactionDetails;
    }
    resetTransactionDetails() {
        this.transactionDetails = null;
        this.showSpinner = true;
        this.startDate = null;
        this.endDate = null;
        this.isFilterSuccess = false;
        this.transactionService.getTransactionDetailsByUserId().subscribe({
            next: transactionDetails => this.transactionDetails = this.onComplete(transactionDetails),
            error: err => this.errorMessage = err
        });
    }
    computeTotalAmount(transactionDetails) {
        this.cashIn = transactionDetails.filter(x => x.transactionType == "Cash-In").reduce((sum, current) => sum + current.amount, 0);
        this.cashOut = transactionDetails.filter(x => x.transactionType == "Cash-Out").reduce((sum, current) => sum + current.amount, 0);
        return this.cashIn - this.cashOut;
    }
};
MyTransactionsComponent = __decorate([
    Component({
        selector: 'app-my-transactions',
        templateUrl: './my-transactions.component.html',
        styleUrls: ['./my-transactions.component.scss']
    })
], MyTransactionsComponent);
export { MyTransactionsComponent };
//# sourceMappingURL=my-transactions.component.js.map