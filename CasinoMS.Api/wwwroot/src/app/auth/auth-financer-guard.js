import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthFinancerGuard = class AuthFinancerGuard {
    constructor(router, globalService) {
        this.router = router;
        this.globalService = globalService;
    }
    canActivate(next, state) {
        if (this.globalService.isFinancerAuthenticated()) {
            return true;
        }
        else {
            if (this.globalService.isLoaderAuthenticated()) {
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
AuthFinancerGuard = __decorate([
    Injectable({
        providedIn: "root"
    })
], AuthFinancerGuard);
export { AuthFinancerGuard };
//# sourceMappingURL=auth-financer-guard.js.map