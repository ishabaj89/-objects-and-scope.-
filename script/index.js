const account = {
    accountName: "Isha Bajaj",
    balance: 10000,

    getBalance: function() {
        return this.balance;
    },

    getAccountName: function() {
        return this.accountName;
    },


deposit: function(amount) {
    this.balance += amount;
    return this.balance;
},

withdrawal: function(amount) {
    this.balance -= amount;
    return this.balance;
}
};

console.log(account.getBalance());

console.log(account.deposit(500));

console.log(account.getBalance());

console.log(account.withdrawal(2000));

console.log(account.getBalance());