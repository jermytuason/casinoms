import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
let AppComponent = class AppComponent {
    constructor(globalService, userService, router, ngxService, idle, keepalive, toastr) {
        this.globalService = globalService;
        this.userService = userService;
        this.router = router;
        this.ngxService = ngxService;
        this.idle = idle;
        this.keepalive = keepalive;
        this.toastr = toastr;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.timeOutWarning = false;
        this.title = 'CasinoMS-App';
        // sets an idle timeout of 10 minutes, for testing purposes.
        idle.setIdle(600); //600
        // sets a timeout period of 30 seconds. after 30 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(30); //30
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(() => {
            this.toastr.info("Welcome Back! Please don't leave your account unattended.", "RESUME ACTIVITY");
            this.reset();
        });
        idle.onTimeout.subscribe(() => {
            this.toastr.info("You're now logged out. Thank you for using Casino MS.", "AUTO LOGOUT");
            this.timedOut = true;
            this.onLogout();
        });
        idle.onIdleStart.subscribe(() => {
            this.toastr.warning("System's been idle for 10mins. You'll be logged out after 30 seconds if there's still no activity.", "AUTO LOGOUT");
        });
        idle.onTimeoutWarning.subscribe((countdown) => {
            this.timeOutWarning = true;
            this.idleState = 'You will logged out in ' + countdown + ' seconds!';
            console.log(this.idleState);
        });
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
        keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this.globalService.getUserLoggedIn().subscribe(userLoggedIn => {
            if (userLoggedIn) {
                idle.watch();
                this.timedOut = false;
            }
            else {
                idle.stop();
            }
        });
    }
    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
        this.timeOutWarning = false;
    }
    onLogout() {
        this.ngxService.start();
        this.timeOutWarning = false;
        localStorage.removeItem("token");
        localStorage.removeItem("fullName");
        this.globalService.setUserLoggedIn(false);
        this.router.navigateByUrl('/user/login');
        this.ngxService.stop();
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map