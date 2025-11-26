function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Current count:", count);
    },
    decrement() {
      count--;
      console.log("Current count:", count);
    },
    getCount() {
      return count;
    }
  };
}

const counter1 = createCounter();
counter1.increment();
counter1.increment();
counter1.decrement();

const counter2 = createCounter();
counter2.increment();

function createBankAccount() {
  let balance = 0;
  let transactions = [];

  function record(type, amount) {
    transactions.push({
      type,
      amount,
      date: new Date().toISOString(),
      balanceAfter: balance
    });
  }

  return {
    deposit(amount) {
      if (amount > 0) {
        balance += amount;
        record("deposit", amount);
        console.log("Deposited:", amount);
      }
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient balance");
      } else {
        balance -= amount;
        record("withdraw", amount);
        console.log("Withdrawn:", amount);
      }
    },
    getBalance() {
      return balance;
    },
    getTransactionHistory() {
      return [...transactions];
    }
  };
}

const account = createBankAccount();
account.deposit(500);
account.withdraw(200);
account.withdraw(400);
console.log("Final Balance:", account.getBalance());
console.log("Transaction History:", account.getTransactionHistory());
console.log(account.balance);
