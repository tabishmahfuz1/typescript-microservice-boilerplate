import { IDivisionModel, DivisionModel } from "../models/Division";
import { IDivision } from "../models/interfaces/Division";
import { injectable } from "inversify";
import { BaseRepository } from "./BaseRepository";

export interface DivisionRepository extends BaseRepository<IDivision, IDivisionModel> {}

@injectable()
export class MongooseDivisionRepository implements DivisionRepository {
    create(division: IDivision): Promise<IDivisionModel> {
        let newDivision = new DivisionModel(division);
        return newDivision.save();
    }    
    
    findById(id: string): Promise<IDivisionModel> {
        return DivisionModel.findById(id).exec();
    }
    
    
    findOne(filters?: any): Promise<IDivisionModel> {
        return DivisionModel.findOne(filters).exec();
    }
    
    
    find(filters?: any): Promise<IDivisionModel[]> {
        return DivisionModel.find(filters).exec();
    }
    
    
    delete(id: string): Promise<IDivisionModel> {
        return DivisionModel.findByIdAndDelete(id).exec();
    }
    
    
    async deleteMany(filters: any): Promise<Number> {
        let res = await DivisionModel.deleteMany(filters).exec();
        return res.deletedCount;
    }
}