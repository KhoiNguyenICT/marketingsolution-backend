import ConnectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema } from 'mongoose';

export default interface IValueModel extends Document {
    name: string;
    value: string;
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
        });

        return schema;
    }

}

export const schema = model<IValueModel>(ConnectionNames.Values, ValueSchema.schema);
