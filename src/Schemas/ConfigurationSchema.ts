import { Schema, model, Document } from 'mongoose';
import CollectionNames from '../Shared/Constants/CollectionNames';

export default interface IConfigurationModel extends Document {
    key: string;
    value: string;
}

class ConfigurationSchema {

    static get Schema() {
        const schema = new Schema({
            key: {
                type: String,
                required: true,
            },
            value: {
                type: String,
                required: true,
            },
        }, { versionKey: false });
        return schema;
    }

}

export const schema = model<IConfigurationModel>(CollectionNames.Configurations, ConfigurationSchema.Schema);
