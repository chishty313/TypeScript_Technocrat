{
    // Getter & Setter Method
  
    class BankAccount {
      constructor(
        readonly id: number,
        public name: string,
        private _balance: number
      ) {}

    //   Setter
    set deposit(amount: number) {
        this._balance = this._balance + amount;
    }
  
    //   addDeposit(amount: number) {
    //     this.balance = +amount;
    //   }

    //   Getter
    get balance() {
        return this._balance
    }
  
    //   getBalance() {
    //     return this.balance;
    //   }
    }
  
    const goribManusherAccount = new BankAccount(123, "Chishty", 30);
    console.log(goribManusherAccount);
    goribManusherAccount.deposit = 20
    console.log(goribManusherAccount.balance);
  }
  