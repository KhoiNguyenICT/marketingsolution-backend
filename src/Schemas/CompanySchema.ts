import CollectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema, Types } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface ICompanyModel extends Document {
    name: string;
    address: string;
    created_by: Types.ObjectId;
    updated_by: Types.ObjectId;
}

class CompanySchema {

    static get Schema() {
        const schema = new Schema({
            name: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: true,
            },
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

export const schema = model<ICompanyModel>(CollectionNames.Companies, CompanySchema.Schema);
