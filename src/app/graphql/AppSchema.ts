import Schema from "./Schema";
import typeDefs from './typeDefs';
import Resolver from "./resolvers/Resolver";
import { injectable } from "inversify";
import { getAsArray as GetResolvers } from './resolvers/ExampleResolvers';

@injectable()
export default class AppSchema extends Schema {

    typeDefs(): string {
        return typeDefs;
    }    
    
    resolvers(): Resolver[] { 
        return GetResolvers();
    }

}