import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthLoaderGuard = class AuthLoaderGuard {
    constructor(router, globalService) {
        this.router = router;
        this.globalService = globalService;
    }
    canActivate(next, state) {
        if (this.globalService.isLoaderAuthenticated()) {
            return true;
        }
        else {
            if (this.globalService.isFinancerAuthenticated()) {
                this.router.navigate(['/home']);
            }
            else {
                this.router.navigate(['/user/login']);
            }
            return false;
        }
    }
    ;
};
AuthLoaderGuard = __decorate([
    Injectable({
        providedIn: "root"
    })
], AuthLoaderGuard);
export { AuthLoaderGuard };
//# sourceMappingURL=auth-loader-guard.js.map