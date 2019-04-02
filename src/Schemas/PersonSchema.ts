import CollectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface IPersonModel extends Document {
    name: string;
    nick_name: string;
    level: string;
    company: string;
}

class PersonSchema {

    static get Schema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true,
            },
            nick_name: {
                type: String,
                required: true,
            },
        }, { versionKey: false });
        schema.plugin(timestamp, {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        });
        schema.index({ '$**': 'text' });
        return schema;
    }

}

export const schema = model<IPersonModel>(CollectionNames.Persons, PersonSchema.Schema);
