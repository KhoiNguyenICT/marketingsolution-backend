import { Schema, model, Document } from 'mongoose';
import CollectionNames from '../Shared/Constants/CollectionNames';
import * as timestamp from 'mongoose-timestamp';

export default interface IAssetModel extends Document {
    original_name: string;
    file_name: string;
    file_size: string;
    file_type: string;
    file_path: string;
}

class AssetSchema {

    static get Schema() {
        const schema = new Schema({
            original_name: {
                type: String,
                required: true,
            },
            file_name: {
                type: String,
                required: true,
                unique: true,
            },
            file_size: {
                type: String,
                required: true,
            },
            file_type: {
                type: String,
                required: true,
            },
            file_path: {
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

export const schema = model<IAssetModel>(CollectionNames.Assets, AssetSchema.Schema);
