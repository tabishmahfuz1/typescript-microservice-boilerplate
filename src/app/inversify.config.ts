import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import Config from "./providers/config/Config";
import DotEnvConfig from "./providers/config/DotEnvConfig";
import { KeyStore, LocalKeyStore } from "./providers/Keystore";
import { Logger, STDOutLogger } from "./Log";
import { TokenHandler, JWTHandler } from "./providers/TokenHandler";
import Schema from "./graphql/Schema";
import AppSchema from "./graphql/AppSchema";
import { Database } from "./database/Database";
import { MongooseDatabase } from "./database/Database";
import { MetricCollectorInterface, PrometheusMetricCollector } from "./providers/MetricsProvider";
import { UserRespository, MongooseUserRepository } from "./database/repositories/UserRepository";

const container = new Container({ autoBindInjectable: true });

container.bind<Config>(TYPES.Config).to(DotEnvConfig).inSingletonScope();
container.bind<Database>(TYPES.Database).to(MongooseDatabase).inSingletonScope();
container.bind<KeyStore>(TYPES.KeyStore).to(LocalKeyStore).inRequestScope();
container.bind<Logger>(TYPES.Logger).to(STDOutLogger).inSingletonScope();
container.bind<TokenHandler>(TYPES.TokenHandler).to(JWTHandler).inRequestScope();
container.bind<Schema>(TYPES.Schema).to(AppSchema).inSingletonScope();
container.bind<MetricCollectorInterface>(TYPES.MetricCollector).to(PrometheusMetricCollector).inSingletonScope();

/**
 * Repositories
 */
container.bind<UserRespository>(TYPES.UserRepository).to(MongooseUserRepository);

export { container };