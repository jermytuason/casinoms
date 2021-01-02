import { __decorate } from "tslib";
import { Component, ViewChild } from '@angular/core';
let LoadersTransactionsComponent = class LoadersTransactionsComponent {
    constructor(transactionService, toastr, excelService, ngxService, globalService) {
        this.transactionService = transactionService;
        this.toastr = toastr;
        this.excelService = excelService;
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
        this.transactionService.getTransactionDetails().subscribe({
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
        this.transactionService.getTransactionDetails().subscribe({
            next: transactionDetails => this.transactionDetails = this.onComplete(transactionDetails),
            error: err => this.errorMessage = err
        });
    }
    computeTotalAmount(transactionDetails) {
        this.cashIn = transactionDetails.filter(x => x.transactionType == "Cash-In").reduce((sum, current) => sum + current.amount, 0);
        this.cashOut = transactionDetails.filter(x => x.transactionType == "Cash-Out").reduce((sum, current) => sum + current.amount, 0);
        return this.cashIn - this.cashOut;
    }
    // openDialog(restaurantName: string, restaurantTypes: string, cuisines: string, city: string, province: string, restaurantAddress: string
    //   , socialMediaUrl: string, firstName: string, lastName: string, contactNumber: string, emailAddress: string): void {
    //   const dialogRef = this.dialog.open(SuperAdminMerchantDetailsDialog, {
    //     width: '1000px',
    //     data: {
    //       restaurantName: restaurantName, restaurantTypes: restaurantTypes, cuisines: cuisines, city: city,
    //       province: province, restaurantAddress: restaurantAddress, socialMediaUrl: socialMediaUrl, firstName: firstName,
    //       lastName: lastName, contactNumber: contactNumber, emailAddress: emailAddress
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log('The dialog was closed');
    //     //   this.animal = result;
    //   });
    // }
    exportAsXLSX() {
        // const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.dataTable.nativeElement);
        // const wb: XLSX.WorkBook = XLSX.utils.book_new();
        // XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        // /* save to file */
        // XLSX.writeFile(wb, 'Loaders_Transaction.xlsx')
        this.excelService.exportAsExcelFile(this.transactionDetails, 'Loaders_Transaction');
    }
};
__decorate([
    ViewChild('DataTable')
], LoadersTransactionsComponent.prototype, "dataTable", void 0);
LoadersTransactionsComponent = __decorate([
    Component({
        selector: 'app-loaders-transactions',
        templateUrl: './loaders-transactions.component.html',
        styleUrls: ['./loaders-transactions.component.scss']
    })
], LoadersTransactionsComponent);
export { LoadersTransactionsComponent };
//# sourceMappingURL=loaders-transactions.component.js.map