"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateNaissance = exports.formatDate = void 0;
const formatDate = (date_ob) => {
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return `${date}/${month}/${year}  - ${hours.toString().padStart(2, '0')}h${minutes.toString().padStart(2, '0')}`;
};
exports.formatDate = formatDate;
const dateNaissance = (date_ob) => {
    if (!date_ob) {
        return '';
    }
    date_ob = new Date(date_ob);
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    let seconds = date_ob.getSeconds();
    return `${date}/${month}/${year}`;
};
exports.dateNaissance = dateNaissance;
//# sourceMappingURL=index.js.map