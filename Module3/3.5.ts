{
  // Access modifier

  class BankAccount {
    constructor(
      readonly id: number,
      public name: string,
      protected balance: number
    ) {}

    addDeposit(amount: number) {
      this.balance = +amount;
    }

    getBalance() {
      return this.balance;
    }
  }

  class StudentAccount extends BankAccount {
    test() {}
  }

  const goribManusherAccount = new BankAccount(123, "Chishty", 30);
  console.log(goribManusherAccount);
  console.log(goribManusherAccount.getBalance());
}
