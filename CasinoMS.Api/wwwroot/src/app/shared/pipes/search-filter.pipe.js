import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let SearchFilterPipe = class SearchFilterPipe {
    transform(transactionDetails, searchValue, filterMetadata) {
        this.filteredTransactionDetails = null;
        this.cashIn = 0;
        this.cashOut = 0;
        if (!transactionDetails || !searchValue) {
            return transactionDetails;
        }
        this.filteredTransactionDetails = transactionDetails.filter(transactionDetails => {
            var _a, _b, _c, _d, _e;
            return ((_a = transactionDetails.submittedBy) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_b = transactionDetails.playerUserName) === null || _b === void 0 ? void 0 : _b.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_c = transactionDetails.transactionType) === null || _c === void 0 ? void 0 : _c.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_d = transactionDetails.referenceNo) === null || _d === void 0 ? void 0 : _d.toLocaleLowerCase().includes(searchValue === null || searchValue === void 0 ? void 0 : searchValue.toLocaleLowerCase())) || ((_e = transactionDetails.amount) === null || _e === void 0 ? void 0 : _e.toString().includes(searchValue));
        });
        this.cashIn = this.filteredTransactionDetails.filter(x => x.transactionType == "Cash-In").reduce((sum, current) => sum + current.amount, 0);
        this.cashOut = this.filteredTransactionDetails.filter(x => x.transactionType == "Cash-Out").reduce((sum, current) => sum + current.amount, 0);
        filterMetadata.count = this.cashIn - this.cashOut;
        return this.filteredTransactionDetails;
    }
};
SearchFilterPipe = __decorate([
    Pipe({
        name: 'searchFilter'
    })
], SearchFilterPipe);
export { SearchFilterPipe };
//# sourceMappingURL=search-filter.pipe.js.map