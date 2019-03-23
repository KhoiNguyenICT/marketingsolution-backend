import { MainRoutes } from './../Routes/MainRoutes';
import { Application } from 'express';
import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as mongoose from 'mongoose';
import * as morgan from 'morgan';
import * as mongooseMorgan from 'mongoose-morgan';
import ConnectionNames from '../Shared/Constants/CollectionNames';

export class StartupHelper {

    public static ConfigEnvironment() {
        dotenv.config();
    }

    public static ConfigMiddleWares(express: Application) {
        express.use(bodyParser.urlencoded({ extended: true }));
        express.use(bodyParser.json());
        express.use(morgan('dev'));
        express.use(mongooseMorgan({
            collection: ConnectionNames.Logs,
            connectionString: process.env.MONGO_URI,
        }));
    }

    public static ConfigRouters(application: Application) {
        application.use('/api', new MainRoutes().routes);
    }

    public static ConfigDatabase() {
        (mongoose as any).Promise = global.Promise;
        mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false });
    }

}
