import mongoose, { Schema, model, Document } from 'mongoose';
import { ICompany } from './interfaces/Company';

export interface ICompanyModel extends ICompany, Document {

}

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    // address: {
    //     line1: String,
    //     line2: String,
    //     postalCode: String,
    //     city: String,
    //     state: String
    // },
    address: String,
    phone: String,
    gstInGoods: String,
    gstInService: String,
    idDisfunct: {
        type: Boolean,
        default: false
    }
});

export const CompanyModel = model<ICompanyModel>('Company', CompanySchema);