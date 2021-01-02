import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
let DefinitionService = class DefinitionService {
    constructor(http, globalService) {
        this.http = http;
        this.globalService = globalService;
        this.getUserTypesUrl = 'api/Definition/GetUserTypes';
        this.getTeamsUrl = 'api/Definition/GetTeams';
        this.getUserTypesUrl = globalService.baseUrl() + this.getUserTypesUrl;
        this.getTeamsUrl = globalService.baseUrl() + this.getTeamsUrl;
    }
    getUserTypes() {
        return this.http.get(this.getUserTypesUrl)
            .pipe(tap(data => console.log()), catchError(this.handleError));
    }
    getTeams() {
        return this.http.get(this.getTeamsUrl)
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
DefinitionService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DefinitionService);
export { DefinitionService };
//# sourceMappingURL=definition.service.js.map