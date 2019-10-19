var bankAccount = {
    id: 393939,
    balance: 0,
    moneyIn: function (num1) {
        var newBalance = this.balance + num1
        this.balance = newBalance

    },
    moneyOut: function (num2) {
        if (num2 > this.balance) {
            console.log("not enough money")
        } else {
            var newBalance = this.balance - num2
            this.balance = newBalance
        }
    },
}

module.exports = (bankAccount)