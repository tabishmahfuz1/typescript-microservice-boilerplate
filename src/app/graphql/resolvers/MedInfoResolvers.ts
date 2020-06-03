import Resolver, { Permissions } from "./Resolver";
import { ResolverType } from "./RESOLVER_TYPES";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { PMTRespository } from "../../database/repositories/PMTRepository";
import { IPMT } from "../../database/models/interfaces/PMT";
import { ApolloError, UserInputError } from "apollo-server-express";
import { container } from "../../inversify.config";

@injectable()
export class ExampleResolver extends Resolver {
    type(): ResolverType {
        return "Mutation";
    }    
    
    key(): string {
        return "createJob";
    }

    requiredPermissions(): string[] {
        return [
            Permissions.Admin
        ];
    }

    constructor(
    ) {
        super();
    }
    
    async handle(parent: any, params: any, context: any): Promise<any> {
        // Do Something!
    }
}

export const getAsArray: () => Resolver[] = () => {
    return [
        container.get(ExampleResolver),
    ];
}