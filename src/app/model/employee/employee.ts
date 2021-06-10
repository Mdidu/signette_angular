import {Adresse} from "../adresse/adresse";
import {Role} from "../role/role";

export class Employee {
  userId?: number;
  mail?: string;
  password?: string;
  userDateOfBirth?: Date;
  userEntryDate?: Date;
  userLastname?: string;
  userName?: string;
  userNss?: number;
  userPhone?: string;
  userUsername?: string;
  addressId?: Adresse;
  roleId?: Role;
}
