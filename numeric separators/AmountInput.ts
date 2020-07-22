class AmountInput {
    private static MAX_ALLOWED = 99_999_999;

    amount: number = 193141812414;

    showToolTip(){
        setTimeout(()=>{
            // hide tooltip or whatever
        },2_500);
    }

    formatMillion(){
        return this.amount / 1_000_000 + "M";
    }
}

const input = new AmountInput();
console.log(input.formatMillion());