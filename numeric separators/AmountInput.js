var AmountInput = /** @class */ (function () {
    function AmountInput() {
        this.amount = 193141812414;
    }
    AmountInput.prototype.showToolTip = function () {
        setTimeout(function () {
            // hide tooltip or whatever
        }, 2500);
    };
    AmountInput.prototype.formatMillion = function () {
        return this.amount / 1000000 + "M";
    };
    AmountInput.MAX_ALLOWED = 99999999;
    return AmountInput;
}());
var input = new AmountInput();
console.log(input.formatMillion());
