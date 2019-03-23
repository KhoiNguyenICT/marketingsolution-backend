import { Schema, model, Document } from 'mongoose';
import ConnectionNames from '../Shared/Constants/CollectionNames';

export default interface ILogModel extends Document {
    level: string;
    created_at: string;
    message: string;
}

class LogSchema {

    static get schema() {
        const schema = new Schema({
            level: {
                type: String,
                required: true,
            },
            created_at: {
                type: Date,
                required: true,
            },
            message: {
                type: String,
                required: true,
            },
        });
        return schema;
    }

}

export const schema = model<ILogModel>(ConnectionNames.Logs, LogSchema.schema);
