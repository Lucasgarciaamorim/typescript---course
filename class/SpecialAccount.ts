import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (value: number) => {
    this.balance = this.balance + (value + 10);
  };
}
