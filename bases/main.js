"use strict";
var Validation;
(function (Validation) {
    Validation.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validation.valiadteDate = (myDate) => {
        return (isNaN(myDate.valueOf()))
            ? false
            : true;
    };
})(Validation || (Validation = {}));
//# sourceMappingURL=main.js.map