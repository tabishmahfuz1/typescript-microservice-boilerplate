import Resolver, { Permissions } from "./Resolver";
import { ResolverType } from "./RESOLVER_TYPES";
import { inject, injectable } from "inversify";
import { TYPES } from "../../types";
import { ApolloError, UserInputError } from "apollo-server-express";
import { container } from "../../inversify.config";

@injectable()
export class AddUserResolver extends Resolver {
    type(): ResolverType {
        return "Mutation";
    }    
    
    key(): string {
        return "addUser";
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


@injectable()
export class UpdateUserResolver extends Resolver {
    type(): ResolverType {
        return "Mutation";
    }    
    
    key(): string {
        return "updateUser";
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

@injectable()
export class GetUserResolver extends Resolver {
    type(): ResolverType {
        return "Query";
    }    
    
    key(): string {
        return "getUser";
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
        container.get(AddUserResolver),
        container.get(UpdateUserResolver),
        container.get(GetUserResolver),
    ];
}