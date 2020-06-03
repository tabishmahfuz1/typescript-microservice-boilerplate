import { IAddress } from "./Address";
import { IDivision } from "./Division";

export interface IPMT {
    firstName: string;
    lastName: string;
    phone?: string;
    email?: string;
    dob?: Date;
    address?: string;//IAddress;
    division: string | IDivision;
    idDisfunct?: boolean;
}