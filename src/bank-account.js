//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    //this.total=0;
    this.estado=0;
  }

  open() {
    if(this.estado!=1)
    {
      this.estado=1;
      this.total=0;
    }
    else{
      throw new ValueError;
    }
  }

  close() {
    if(this.estado!=0)
    {
      this.estado=0;
    }
    else{
      throw new ValueError;
    }
  }

  deposit(amount) {
    if(this.estado!=0)
    {
      this.total=this.total+amount;
    }
    else{
      throw new ValueError;
    }
  }

  withdraw(amount) {
    if(this.estado!=0)
    {
      if(amount<=this.total)
      {
        this.total=this.total-amount;
      }
      else{
        throw new ValueError;
      }
    }
    else{
      throw new ValueError;
    }
  }

  get balance() {
    if(this.estado!=0)
    {
      return this.total;
    }
    throw new ValueError;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
