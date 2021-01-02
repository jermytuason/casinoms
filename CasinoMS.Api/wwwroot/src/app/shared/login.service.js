import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
let LoginService = class LoginService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.loginUrl = 'api/Login';
        this.loginUrl = globalService.baseUrl() + this.loginUrl;
    }
    loginUser(login) {
        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this.http.post(this.loginUrl, login, { headers })
            .pipe(catchError(this.handleError));
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
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map