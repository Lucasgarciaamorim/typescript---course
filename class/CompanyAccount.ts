import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loan: number) => {
    this.balance = this.balance + loan;

    console.log("Loan Sucessfull");
  };
}
