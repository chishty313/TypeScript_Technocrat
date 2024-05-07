{
    // Encapsulation
    // Access modifier
  
    class BankAccount {
      constructor(
        readonly id: number,
        public name: string,
        private _balance: number
      ) {}
  
      addDeposit(amount: number) {
        this._balance = +amount;
      }
  
      private getBalance() {
        return this._balance;
      }

      getHiddenBalance() {
        return this.getBalance();
      }
    }
  
    class StudentAccount extends BankAccount {
      test() {}
    }
  
    const goribManusherAccount = new BankAccount(123, "Chishty", 30);
    console.log(goribManusherAccount);
    console.log(goribManusherAccount.getHiddenBalance());
  }
  