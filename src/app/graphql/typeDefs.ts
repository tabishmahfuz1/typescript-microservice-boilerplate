import { readFileSync } from "fs";
import path = require("path");

const typeDefs = readFileSync(path.join(__dirname, '../../../graphql/typeDefs.graphql'), 'utf8');

export default typeDefs;