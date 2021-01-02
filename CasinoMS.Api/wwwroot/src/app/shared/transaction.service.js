import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
let TransactionService = class TransactionService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.transactionDetailsUrl = 'api/TransactionDetails';
        this.getTransactionDetailsUrl = 'api/TransactionDetails';
        this.getTransactionDetailsByUserIdUrl = 'api/TransactionDetails/GetTransactionDetailsByUserId';
        this.getTransactionDetailsByDatesUrl = 'api/TransactionDetails/GetTransactionDetailsByDates/';
        this.getTransactionDetailsByReferenceNoUrl = 'api/TransactionDetails/GetTransactionDetailsByReferenceNo/';
        this.transactionDetailsUrl = globalService.baseUrl() + this.transactionDetailsUrl;
        this.getTransactionDetailsUrl = globalService.baseUrl() + this.getTransactionDetailsUrl;
        this.getTransactionDetailsByUserIdUrl = globalService.baseUrl() + this.getTransactionDetailsByUserIdUrl;
        this.getTransactionDetailsByDatesUrl = globalService.baseUrl() + this.getTransactionDetailsByDatesUrl;
        this.getTransactionDetailsByReferenceNoUrl = globalService.baseUrl() + this.getTransactionDetailsByReferenceNoUrl;
    }
    submitTransactionDetails(transactionDetails) {
        const tokenHeader = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.post(this.transactionDetailsUrl, transactionDetails, { headers: tokenHeader })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    getTransactionDetails() {
        const tokenHeader = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsUrl, { headers: tokenHeader })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    getTransactionDetailsByUserId() {
        const tokenHeader = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsByUserIdUrl, { headers: tokenHeader })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    getTransactionDetailsByDates(startDate, endDate) {
        const tokenHeader = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsByDatesUrl + startDate + "/" + endDate, { headers: tokenHeader })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    getTransactionDetailsByReferenceNo(referenceNo) {
        const tokenHeader = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.getTransactionDetailsByReferenceNoUrl + referenceNo, { headers: tokenHeader })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
};
TransactionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TransactionService);
export { TransactionService };
//# sourceMappingURL=transaction.service.js.map