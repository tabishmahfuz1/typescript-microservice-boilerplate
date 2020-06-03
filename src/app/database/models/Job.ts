import mongoose, { Schema, model, Document } from 'mongoose';
import { Status, IJob } from './interfaces/Job';


export interface IJobModel extends IJob, Document {

}

const JobSchema = new Schema({
    jobId: {
        type: String,
        required: true,
        unique: true
    },
    description: String,
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company"
    },
    quantity: Number,
    division: {
        type: Schema.Types.ObjectId,
        ref: "Division"
    },
    pmt: {
        type: Schema.Types.ObjectId,
        ref: "PMT"
    },
    type: [String],
    status: {
        type: String,
        enum: [Status.YetToStart, Status.WIP, Status.OnHold, Status.Completed]
    },
    startDate: Date,
    firstCut: Date,
    endDate: Date,
    mailReceivedDate: Date,
    assignedUser: String,
    price: Number
});

// JobSchema.index({jobId: 1, status: 1});

export const JobModel = model<IJobModel>('Job', JobSchema);