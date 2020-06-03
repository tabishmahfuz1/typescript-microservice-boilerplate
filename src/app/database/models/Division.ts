import mongoose, { Schema, model, Document } from 'mongoose';
import { IDivision } from './interfaces/Division';

export interface IDivisionModel extends IDivision, Document {

}

const DivisionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company'
    },
    idDisfunct: {
        type: Boolean,
        default: false
    }
});

export const DivisionModel = model<IDivisionModel>('Division', DivisionSchema);