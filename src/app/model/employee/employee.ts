import {Adresse} from "../adresse/adresse";
import {Role} from "../role/role";

export class Employee {
  userId?: number;
  userMail?: string;
  userPassword?: string;
  userDateOfBirth?: Date;
  userEntryDate?: Date;
  userLastname?: string;
  nameUser?: string;
  userNss?: number;
  userPhone?: string;
  userUsername?: string;
  address: Adresse;
  role: Role;
}
