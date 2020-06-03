import mongoose, { Schema, model, Document } from 'mongoose';
import { IPMT } from './interfaces/PMT';

export interface IPMTModel extends IPMT, Document {

}

const PMTSchema = new Schema({
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    dob: Date,
    address: String,
    idDisfunct: {
        type: Boolean,
        default: false
    },
    // address: {
    //     line1: String,
    //     line2: String,
    //     postalCode: String,
    //     city: String,
    //     state: String
    // },
    division: {
        type: Schema.Types.ObjectId,
        ref: 'Division'
    }
});

export const PMTModel = model<IPMTModel>('PMT', PMTSchema);