import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const myworksheet = XLSX.utils.json_to_sheet(json);
        const myworkbook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        FileSaver.saveAs(data, fileName + '_exported' + EXCEL_EXTENSION);
    }
};
ExcelService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ExcelService);
export { ExcelService };
//# sourceMappingURL=excel.service.js.map