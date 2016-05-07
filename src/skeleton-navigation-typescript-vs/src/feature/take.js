define(["require", "exports"], function (require, exports) {
    "use strict";
    var TakeValueConverter = (function () {
        function TakeValueConverter() {
        }
        TakeValueConverter.prototype.toView = function (array, count, start) {
            if (start === void 0) { start = 0; }
            return array.slice(start, count);
        };
        return TakeValueConverter;
    }());
    exports.TakeValueConverter = TakeValueConverter;
});
//# sourceMappingURL=take.js.map