import Schema from "./Schema";
import typeDefs from './typeDefs';
import Resolver from "./resolvers/Resolver";
import { injectable } from "inversify";
import { getAsArray as GetMedInfoResolvers } from './resolvers/MedInfoResolvers';

@injectable()
export default class MedInfoSchema extends Schema {

    typeDefs(): string {
        return typeDefs;
    }    
    
    resolvers(): Resolver[] { 
        return GetMedInfoResolvers();
    }

}