export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("nome alterado com sucesso");
  };

  getName = (): string => {
    return this.name;
  };
  getBalance = (): number => {
    return this.balance;
  };

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + value;
      console.log("Deposit Sucessfull");
    }
  };
  withdrawn = (value: number): void => {
    if (this.validateStatus()) {
      if (this.balance >= value) {
        this.balance = this.balance - value;
        console.log(" withdrawn sucessfull");
      } else {
        console.log("value withdrawn bigger than balance");
      }
    }
  };

  private validateStatus = () => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta Inválida");
  };
}
