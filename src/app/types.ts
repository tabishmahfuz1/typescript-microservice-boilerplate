const TYPES = {
    KeyStore: Symbol.for("KeyStore"),
    TokenHandler: Symbol.for("TokenHandler"),
    Config: Symbol.for("Config"),
    Database: Symbol.for("Database"),
    Logger: Symbol.for("Logger"),
    Schema: Symbol.for("Schema"),
    MetricCollector: Symbol.for("MetricCollector"),
    DateFormat: Symbol.for("DateFormat"),

    /**
     * Repositories
     */
    UserRepository: Symbol.for("UserRepository"),
};

export { TYPES };