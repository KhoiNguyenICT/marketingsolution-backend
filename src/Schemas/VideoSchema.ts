import CollectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface IVideoModel extends Document {
    title: string;
}

class VideoSchema {

    static get Schema() {
        const schema = new Schema({
            title: {
                type: String,
                required: true,
                unique: true,
            },
            description: {
                type: String,
                required: false,
            },
            tags: [{
                type: Schema.Types.ObjectId,
                ref: CollectionNames.Tags,
                required: false,
            }],
            created_by: {
                type: Schema.Types.ObjectId,
                ref: CollectionNames.Accounts,
                required: true,
            },
            updated_by: {
                type: Schema.Types.ObjectId,
                ref: CollectionNames.Accounts,
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

export const schema = model<IVideoModel>(CollectionNames.Videos, VideoSchema.Schema);
