import ConnectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface IValueModel extends Document {
    name: string;
    value: string;
    name_index: string;
    value_index: string;
}

class ValueSchema {

    static get schema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
            name_index: {
                type: String,
                required: true,
                index: true,
            },
            value_index: {
                type: String,
                required: true,
                index: true,
            },
        });
        schema.plugin(timestamp, {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
        return schema;
    }

}

export const schema = model<IValueModel>(ConnectionNames.Values, ValueSchema.schema);
