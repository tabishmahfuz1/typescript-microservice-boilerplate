import { IPMTModel, PMTModel } from "../models/PMT";
import { IPMT } from "../models/interfaces/PMT";
import { injectable } from "inversify";
import { BaseRepository } from "./BaseRepository";

export interface PMTRespository extends BaseRepository<IPMT, IPMTModel> {}

@injectable()
export class MongoosePMTRepository implements PMTRespository {
    create(pmt: IPMT): Promise<IPMTModel> {
        let newPMT = new PMTModel(pmt);
        return newPMT.save();
    }    
    
    findById(id: string): Promise<IPMTModel> {
        return PMTModel.findById(id).exec();
    }
    
    
    findOne(filters?: any): Promise<IPMTModel> {
        return PMTModel.findOne(filters).exec();
    }
    
    
    find(filters?: any): Promise<IPMTModel[]> {
        return PMTModel.find(filters).exec();
    }
    
    
    delete(id: string): Promise<IPMTModel> {
        return PMTModel.findByIdAndDelete(id).exec();
    }
    
    
    async deleteMany(filters: any): Promise<Number> {
        let res = await PMTModel.deleteMany(filters).exec();
        return res.deletedCount;
    }
}