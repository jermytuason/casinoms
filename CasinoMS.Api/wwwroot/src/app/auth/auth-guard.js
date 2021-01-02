import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let AuthGuard = class AuthGuard {
    constructor(router, globalService) {
        this.router = router;
        this.globalService = globalService;
    }
    canActivate(next, state) {
        if (this.globalService.isAuthenticated()) {
            return true;
        }
        else {
            this.router.navigate(['/user/login']);
            return false;
        }
    }
    ;
};
AuthGuard = __decorate([
    Injectable({
        providedIn: "root"
    })
], AuthGuard);
export { AuthGuard };
//# sourceMappingURL=auth-guard.js.map