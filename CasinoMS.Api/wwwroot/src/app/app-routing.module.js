import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth-guard';
import { AuthLoaderGuard } from './auth/auth-loader-guard';
import { HomeComponent } from './home/home.component';
import { CashInComponent } from './record/cash-in/cash-in.component';
import { CashOutComponent } from './record/cash-out/cash-out.component';
import { LoadersTransactionsComponent } from './reports/loaders-transactions/loaders-transactions.component';
import { MyTransactionsComponent } from './reports/my-transactions/my-transactions.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserComponent } from './user/user.component';
const routes = [
    {
        path: 'home',
        canActivate: [AuthGuard],
        component: HomeComponent
    },
    {
        path: 'user-profile',
        canActivate: [AuthGuard],
        component: UserProfileComponent
    },
    { path: '', redirectTo: '/user/login', pathMatch: 'full' },
    {
        path: 'user', component: UserComponent,
        children: [
            { path: 'registration', component: RegistrationComponent },
            { path: 'login', component: LoginComponent }
        ]
    },
    {
        path: 'record/cashin',
        canActivate: [AuthLoaderGuard],
        component: CashInComponent
    },
    {
        path: 'record/cashout',
        canActivate: [AuthLoaderGuard],
        component: CashOutComponent
    },
    {
        path: 'reports/loaders-transactions',
        canActivate: [AuthGuard],
        component: LoadersTransactionsComponent
    },
    {
        path: 'reports/my-transactions',
        canActivate: [AuthLoaderGuard],
        component: MyTransactionsComponent
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map