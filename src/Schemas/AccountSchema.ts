import CollectionNames from '../Shared/Constants/CollectionNames';
import { Document, model, Schema } from 'mongoose';
import * as timestamp from 'mongoose-timestamp';

export default interface IAccountModel extends Document {
    first_name: string;
    last_name: string;
    was_born: Date;
    is_active: boolean;
    email: string;
    phone_number: string;
    address: string;
    password_hash: string;
    password: string;
}

class AccountSchema {

    static get Schema() {
        const schema = new Schema({
            first_name: {
                type: String,
                required: true,
            },
            last_name: {
                type: String,
                required: true,
            },
            was_born: {
                type: Date,
                required: false,
            },
            is_active: {
                type: Boolean,
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            phone_number: {
                type: String,
                required: true,
            },
            address: {
                type: String,
                required: false,
            },
            password_hash: {
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

export const schema = model<IAccountModel>(CollectionNames.Accounts, AccountSchema.Schema);
