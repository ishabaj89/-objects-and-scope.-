
const account = {
    accountName: "Isha Bajaj",
    balance: 10000,

    // Get account balance
    getBalance: function() {
        return this.balance;
    },

    // Get account holder name
    getAccountName: function() {
        return this.accountName;
    },

    // Check for errors
    accountError: function(amount, action) {

        if (typeof amount !== "number" || !Number.isFinite(amount)) {
            return "Please enter a valid number.";
        }

        if (amount <= 0) {
            return "Amount must be greater than zero.";
        }

        if (action === "withdrawal" && amount > this.balance) {
            return "Insufficient balance!";
        }

        return null;
    },

    // Deposit money
    deposit: function(amount) {

        const error = this.accountError(amount, "deposit");

        if (error) {
            return error;
        }

        this.balance += amount;

        return this.balance;
    },

    // Withdraw money
    withdrawal: function(amount) {

        const error = this.accountError(amount, "withdrawal");

        if (error) {
            return error;
        }

        this.balance -= amount;

        return this.balance;
    },

    // Exit account
    exitAccount: function() {
        return "Thank you for using our ATM. Goodbye!";
    }
};


// ATM USER INTERFACE

function atm() {

    let running = true;

    while (running) {

        const choice = prompt(
            "WELCOME TO ATM\n\n" +
            "1. Check Balance\n" +
            "2. Deposit Money\n" +
            "3. Withdraw Money\n" +
            "4. Account Holder Name\n" +
            "5. Exit\n\n" +
            "Choose an option (1-5):"
        );

        // Check if user clicks Cancel
        if (choice === null) {
            alert(account.exitAccount());
            break;
        }

        switch (choice) {

            // Check balance
            case "1":

                alert(
                    "Your current balance is: $" +
                    account.getBalance().toFixed(2)
                );

                break;


            // Deposit money
            case "2": {

                const input = prompt("Enter deposit amount:");

                if (input === null) break;

                const amount = Number(input);

                const result = account.deposit(amount);

                if (typeof result === "string") {
                    alert(result);
                } else {
                    alert(
                        "Successfully deposited!\n" +
                        "New balance: $" + result.toFixed(2)
                    );
                }

                break;
            }


            // Withdraw money
            case "3": {

                const input = prompt("Enter withdrawal amount:");

                if (input === null) break;

                const amount = Number(input);

                const result = account.withdrawal(amount);

                if (typeof result === "string") {
                    alert(result);
                } else {
                    alert(
                        "Successfully withdrawn!\n" +
                        "New balance: $" + result.toFixed(2)
                    );
                }

                break;
            }


            // Account holder name
            case "4":

                alert(
                    "Account holder: " +
                    account.getAccountName()
                );

                break;


            // Exit ATM
            case "5":

                alert(account.exitAccount());

                running = false;

                break;


            // Invalid menu choice
            default:

                alert("Invalid choice! Please select 1-5.");

        }
    }
}


// Start ATM
atm();
