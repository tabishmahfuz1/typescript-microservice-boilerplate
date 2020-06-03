import { Container } from "inversify";
import "reflect-metadata";
import { TYPES } from "./types";
import Config from "./providers/config/Config";
import DotEnvConfig from "./providers/config/DotEnvConfig";
import { KeyStore, LocalKeyStore } from "./providers/Keystore";
import { Logger, Log4jsLogger } from "./Log";
import { TokenHandler, JWTHandler } from "./providers/TokenHandler";
import Schema from "./graphql/Schema";
import MedInfoSchema from "./graphql/MedInfoSchema";
import { Database } from "./database/Database";
import { MongooseDatabase } from "./database/Database";
import { MetricCollectorInterface, PrometheusMetricCollector } from "./providers/MetricsProvider";
import { JobRespository, MongooseJobRepository } from "./database/repositories/JobRepository";
// import { DevConfig } from "./providers/config/DevConfig";
// import { TestConfig } from "../../tests/mocks/TestConfig";
// import { ProdConfig } from "./providers/config/ProdConfig";

const container = new Container({ autoBindInjectable: true });

container.bind<Config>(TYPES.Config).to(DotEnvConfig).inSingletonScope();
container.bind<Database>(TYPES.Database).to(MongooseDatabase).inSingletonScope();
container.bind<KeyStore>(TYPES.KeyStore).to(LocalKeyStore).inRequestScope();
container.bind<Logger>(TYPES.Logger).to(Log4jsLogger).inSingletonScope();
container.bind<TokenHandler>(TYPES.TokenHandler).to(JWTHandler).inRequestScope();
container.bind<MetricCollectorInterface>(TYPES.MetricCollector).to(PrometheusMetricCollector).inSingletonScope();

/**
 * Repositories
 */
container.bind<JobRespository>(TYPES.JobRepository).to(MongooseJobRepository);

export { container };