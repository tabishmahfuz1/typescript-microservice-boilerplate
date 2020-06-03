import { ICompanyModel, CompanyModel } from "../models/Company";
import { ICompany } from "../models/interfaces/Company";
import { injectable } from "inversify";
import { BaseRepository, FieldSelection } from "./BaseRepository";

export interface CompanyRepository extends BaseRepository<ICompany, ICompanyModel> {}

@injectable()
export class MongooseCompanyRepository implements CompanyRepository {
    create(company: ICompany): Promise<ICompanyModel> {
        let newCompany = new CompanyModel(company);
        return newCompany.save();
    }    
    
    findById(id: string, fields?: FieldSelection): Promise<ICompanyModel> {
        return CompanyModel.findById(id).exec();
    }
    
    
    findOne(filters?: any, fields?: FieldSelection): Promise<ICompanyModel> {
        return CompanyModel.findOne(filters).exec();
    }
    
    
    find(filters?: any, fields?: FieldSelection): Promise<ICompanyModel[]> {
        let query = CompanyModel.find(filters);

        if ( fields ) {
            query = query.select(fields);
        }
        
        return query.exec();
    }
    
    
    delete(id: string): Promise<ICompanyModel> {
        return CompanyModel.findByIdAndDelete(id).exec();
    }
    
    
    async deleteMany(filters: any): Promise<Number> {
        let res = await CompanyModel.deleteMany(filters).exec();
        return res.deletedCount;
    }
}