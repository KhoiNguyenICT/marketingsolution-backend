import { Schema, model, Document } from 'mongoose';
import CollectionNames from '../Shared/Constants/CollectionNames';

export default interface ICategoryModel extends Document {
    name: string;
    alias: string;
}

class CategorySchema {

    static get Schema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true,
                unique: true,
            },
            alias: {
                type: String,
                required: true,
            },
        }, { versionKey: false });
        return schema;
    }

}

export const schema = model<ICategoryModel>(CollectionNames.Categories, CategorySchema.Schema);
