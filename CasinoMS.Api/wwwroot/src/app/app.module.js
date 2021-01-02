import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { CashInComponent } from './record/cash-in/cash-in.component';
import { CashOutComponent } from './record/cash-out/cash-out.component';
import { RecordComponent } from './record/record.component';
import { LoadersTransactionsComponent } from './reports/loaders-transactions/loaders-transactions.component';
import { MyTransactionsComponent } from './reports/my-transactions/my-transactions.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchFilterPipe } from './shared/pipes/search-filter.pipe';
import { ExcelService } from './shared/excel.service';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { MomentModule } from 'angular2-moment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
const customUiLoader = {
    "bgsColor": "white",
    "bgsOpacity": 0.5,
    "bgsPosition": "bottom-right",
    "bgsSize": 60,
    "bgsType": "ball-spin-clockwise",
    "blur": 5,
    "delay": 0,
    "fastFadeOut": true,
    "fgsColor": "white",
    "fgsPosition": "center-center",
    "fgsSize": 80,
    "fgsType": "folding-cube",
    "gap": 24,
    "logoPosition": "center-center",
    "logoSize": 120,
    "logoUrl": "",
    "masterLoaderId": "master",
    "overlayBorderRadius": "0",
    "overlayColor": "rgba(40, 40, 40, 0.8)",
    "pbColor": "white",
    "pbDirection": "ltr",
    "pbThickness": 3,
    "hasProgressBar": true,
    "text": "",
    "textColor": "#FFFFFF",
    "textPosition": "center-center",
    "maxTime": -1,
    "minTime": 300
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            UserComponent,
            RegistrationComponent,
            LoginComponent,
            HomeComponent,
            RecordComponent,
            ReportsComponent,
            CashInComponent,
            CashOutComponent,
            LoadersTransactionsComponent,
            MyTransactionsComponent,
            SearchFilterPipe,
            UserProfileComponent,
        ],
        imports: [
            BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            ReactiveFormsModule,
            BrowserAnimationsModule,
            ToastrModule.forRoot(),
            NgxPaginationModule,
            FormsModule,
            NgxUiLoaderModule.forRoot(customUiLoader),
            NgIdleKeepaliveModule.forRoot(),
            MomentModule,
            NgbModule
        ],
        providers: [ExcelService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map