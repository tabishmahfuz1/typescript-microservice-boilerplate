import mongoose, { Schema, model, Document } from 'mongoose';
import { IUser } from './interfaces/User';


export interface IUserModel extends IUser, Document {

}

const JobSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    }
});

// JobSchema.index({jobId: 1, status: 1});

export const UserModel = model<IUser>('User', JobSchema);