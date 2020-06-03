/**
 * Add Types in the array below
 */
const RESOLVER_TYPES = ['Mutation', 'Query', 'Company', 'Division', 'Job', 'PMT', 'Date'] as const;


type ResolverTuple = typeof RESOLVER_TYPES;
export type ResolverType = ResolverTuple[number];


export type ResolverTypeSetter = () => ResolverType;
export type KeySetter = () => string;
