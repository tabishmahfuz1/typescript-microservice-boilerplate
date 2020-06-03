import { IJobModel, JobModel } from "../models/Job";
import { IJob } from "../models/interfaces/Job";
import { injectable } from "inversify";
import { BaseRepository } from "./BaseRepository";

export interface JobRespository extends BaseRepository<IJob, IJobModel> {}

@injectable()
export class MongooseJobRepository implements JobRespository {
    create(job: IJob): Promise<IJobModel> {
        let newJob = new JobModel(job);
        return newJob.save();
    }    
    
    findById(id: string): Promise<IJobModel> {
        return JobModel.findById(id).exec();
    }
    
    
    findOne(filters?: any): Promise<IJobModel> {
        return JobModel.findOne(filters).exec();
    }
    
    
    find(filters?: any, fields?: any, populateRelations?:boolean): Promise<IJobModel[]> {
        let query = JobModel.find(filters || {})

        if( fields ) {
            query = query.select(fields);
        }

        if (populateRelations) {
            query = query.populate('company').populate('pmt').populate('division')
        }
        return query.exec();
    }
    
    
    delete(id: string): Promise<IJobModel> {
        return JobModel.findByIdAndDelete(id).exec();
    }
    
    
    async deleteMany(filters: any): Promise<Number> {
        let res = await JobModel.deleteMany(filters).exec();
        return res.deletedCount;
    }


}