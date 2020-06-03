import mongoose from 'mongoose';
import { MongoError } from 'mongodb';
import Config from '../providers/config/Config';
import { inject, injectable } from 'inversify';
import { TYPES } from '../types';
import { Logger } from '../Log';

export interface Database {
	init(): any;
}

@injectable()
export class MongooseDatabase implements Database {
	// @lazyInject(TYPES.Config) _config: Config


	constructor(
		@inject(TYPES.Config) private _config: Config,
		@inject(TYPES.Logger) private logger: Logger
	) {}

	/**
	 * Function responsible for initialization of the Database 
	 */
    public init (): any {
		const dsn = this._config.get('dbUrl');
		const options = { useNewUrlParser: true, useUnifiedTopology: true };

        if ( ! dsn )
            throw new Error('DB URL not set in configuration');

		(<any>mongoose).Promise = global.Promise;

		mongoose.set('useCreateIndex', true);
		mongoose.set('useFindAndModify', false);
		mongoose.connect(dsn, options, (error: MongoError) => {
			// handle the error case
			if (error) {
				this.logger.error('Failed to connect to the Mongo server!!');
				console.log(error);
				throw error;
			} else {
				console.log("Database Connected!");
				this.logger.info('connected to mongo server at: ' + dsn);
			}
		});
	}
}

export default mongoose