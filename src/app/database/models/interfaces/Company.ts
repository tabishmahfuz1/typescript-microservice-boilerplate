import { IAddress } from "./Address";

export interface ICompany {
    name: string;
    address: string;// IAddress;
    phone: string;
    gstInGoods: string;
    gstInService: string;
    idDisfunct?: boolean;
}