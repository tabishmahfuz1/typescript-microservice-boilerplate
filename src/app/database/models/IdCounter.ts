import { Schema, model, Document, Model } from 'mongoose';


export interface IdCounterDocument extends Document {
    _id: string;
    seq: number;
    getNextId(): Promise<number>;
}

export interface IdCounterModel extends Model<IdCounterDocument> {
    getNextId(_id: string): Promise<number>;
}


const IdCounterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

IdCounterSchema.statics.getNextId = /*async */function(_id: string): Promise<number> {
    // let counter = await this.findByIdAndUpdate({_id}, {$inc: { seq: 1 }});
    // return counter.seq;

    return new Promise((resolve, reject) => {
        this.findByIdAndUpdate({_id}, {$inc: { seq: 1 }}, {new: true, upsert: true}, function(error, counter){
            if(error)
                reject(error);
            else{
                resolve(counter.seq);
            }
        })
    });
}

export const IdCounter = model<IdCounterDocument, IdCounterModel>('IdCounter', IdCounterSchema);
