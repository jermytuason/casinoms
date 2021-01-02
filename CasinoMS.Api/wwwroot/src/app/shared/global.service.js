import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let GlobalService = class GlobalService {
    constructor(router) {
        this.router = router;
        this.userLoggedIn = new Subject();
        this.userLoggedIn.next(false);
        this.userFullName = "";
        this.currentPage = "";
    }
    //Authentication Checker
    isAuthenticated() {
        var result = false;
        if (localStorage.getItem("token") != null) {
            result = true;
        }
        return result;
    }
    isFinancerAuthenticated() {
        var result = false;
        if (localStorage.getItem("token") != null && localStorage.getItem("UserType") == "Financer") {
            result = true;
        }
        return result;
    }
    isLoaderAuthenticated() {
        var result = false;
        if (localStorage.getItem("token") != null && localStorage.getItem("UserType") == "Loader") {
            result = true;
        }
        return result;
    }
    setCurrentPage(page) {
        this.currentPage = page;
    }
    setUserLoggedIn(userLoggedIn) {
        this.userLoggedIn.next(userLoggedIn);
    }
    getUserLoggedIn() {
        return this.userLoggedIn.asObservable();
    }
    GetUserFullName() {
        return localStorage.getItem("fullName");
    }
    redirectUnauthorizedUser() {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/user/login']);
        }
    }
    baseUrl() {
        return '';
        // return 'https://localhost:44393/'
    }
};
GlobalService = __decorate([
    Injectable({
        providedIn: "root"
    })
], GlobalService);
export { GlobalService };
//# sourceMappingURL=global.service.js.map