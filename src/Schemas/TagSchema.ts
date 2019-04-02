import CollectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface ITagModel extends Document {
    name: string;
}

class TagSchema {

    static get Schema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true,
                unique: true,
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

export const schema = model<ITagModel>(CollectionNames.Tags, TagSchema.Schema);
