import CollectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface ICompanyModel extends Document {
    name: string;
    address: string;
}

class CompanySchema {

    static get schema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true,
            },
            address: {
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

export const schema = model<ICompanyModel>(CollectionNames.Companies, CompanySchema.schema);