import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
let UserService = class UserService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.usersUrl = 'api/User';
        this.userByUserNameUrl = 'api/User/GetUserByUserName/';
        this.activeUserByUserNameUrl = 'api/User/GetActiveUserByUserName/';
        this.loaderUsersByTeamUrl = 'api/User/GetAllLoaderUsersByTeam';
        this.resetPasswordUrl = 'api/User/ResetPassword/';
        this.changePasswordUrl = 'api/User/ChangePassword/';
        this.userProfileUrl = 'api/UserProfile';
        this.usersUrl = globalService.baseUrl() + this.usersUrl;
        this.userByUserNameUrl = globalService.baseUrl() + this.userByUserNameUrl;
        this.activeUserByUserNameUrl = globalService.baseUrl() + this.activeUserByUserNameUrl;
        this.loaderUsersByTeamUrl = globalService.baseUrl() + this.loaderUsersByTeamUrl;
        this.resetPasswordUrl = globalService.baseUrl() + this.resetPasswordUrl;
        this.changePasswordUrl = globalService.baseUrl() + this.changePasswordUrl;
        this.userProfileUrl = globalService.baseUrl() + this.userProfileUrl;
    }
    createUser(user) {
        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this.http.post(this.usersUrl, user, { headers })
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getUserProfile() {
        var tokenHeader = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.userProfileUrl, { headers: tokenHeader })
            .pipe(catchError(this.handleError));
    }
    getUserByUserName(userName) {
        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this.http.get(this.userByUserNameUrl + userName, { headers: headers })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    getActiveUserByUserName(userName) {
        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this.http.get(this.activeUserByUserNameUrl + userName, { headers: headers })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    getAllLoaderUsersByTeam() {
        var tokenHeader = new HttpHeaders({ "Authorization": "Bearer " + localStorage.getItem("token") });
        return this.http.get(this.loaderUsersByTeamUrl, { headers: tokenHeader })
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    resetPassword(forgotPasswordForm) {
        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this.http.put(this.resetPasswordUrl + forgotPasswordForm.userName + "/" + forgotPasswordForm.emailAddress, { headers: headers })
            .pipe(catchError(this.handleError));
    }
    changePassword(changePasswordForm) {
        const headers = new HttpHeaders({ "Content-Type": "application/json" });
        return this.http.put(this.changePasswordUrl + changePasswordForm.userName + "/" + changePasswordForm.currentPassword + "/" + changePasswordForm.newPassword, { headers: headers })
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
UserService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UserService);
export { UserService };
//# sourceMappingURL=user.service.js.map