import { ICompany } from "./Company";

export interface IDivision {
    name: string;
    description: string;
    company: string | ICompany;
    idDisfunct?: boolean;
} 