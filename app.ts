import { SpecialAccount } from "./class/SpecialAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";

// const peopleAccount: PeopleAccount = new PeopleAccount(1, "Lucas", 30);
// // peopleAccount.deposit(100);
// // console.log(peopleAccount.balance);

// // peopleAccount.withdrawn(301);
// // console.log(peopleAccount.balance);

// const companyAccount: CompanyAccount = new CompanyAccount("Garcia&Amorim", 20);
// companyAccount.getLoan(0);
// console.log(companyAccount.balance);

const specialAccount: SpecialAccount = new SpecialAccount("Amorim", 50);
specialAccount.deposit(500);
console.log(specialAccount.balance);
