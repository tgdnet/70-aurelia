define(["require", "exports"], function (require, exports) {
    "use strict";
    var SkipValueConverter = (function () {
        function SkipValueConverter() {
        }
        SkipValueConverter.prototype.toView = function (array, count) {
            return array.slice(count);
        };
        return SkipValueConverter;
    }());
    exports.SkipValueConverter = SkipValueConverter;
});
//# sourceMappingURL=skip.js.map