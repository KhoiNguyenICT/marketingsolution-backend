import CollectionNames from '../Shared/Constants/CollectionNames';
import PopulateNames from '../Shared/Constants/PopulateNames';
import { Document, model, Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface IPersonModel extends Document {
    name: string;
    level: string;
    company: string;
}

class PersonSchema {

    static get schema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true,
            },
            level: {
                type: String,
                required: true,
            },
            company: {
                type: Schema.Types.ObjectId,
                required: false,
                ref: PopulateNames.Company,
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

export const schema = model<IPersonModel>(CollectionNames.Persons, PersonSchema.schema);
