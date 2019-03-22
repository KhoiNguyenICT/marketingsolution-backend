import { Document, Model, Types } from 'mongoose';
import { IRead } from '../Interfaces/IRead';
import { IWrite } from '../Interfaces/IWrite';
import { exec } from 'child_process';

export default class RepositoryBase<T extends Document> implements IRead<T>, IWrite<T> {

    private _model: Model<T>;

    constructor(schemaModel: Model<T>) {
        this._model = schemaModel;
    }

    async create(item: T): Promise<T> {
        const result = await this._model.create(item);
        return result;
    }

    async find(filter = {}): Promise<T[]> {
        const result = await this._model.find(filter).exec();
        return result;
    }

    async update(id: string, item: T): Promise<T> {
        const result = await this._model.findByIdAndUpdate(this.toObjectId(id), item);
        return result;
    }

    async delete(id: string): Promise<T> {
        const result = await this._model.findByIdAndRemove(this.toObjectId(id)).exec();
        return result;
    }

    async findById(id: string): Promise<T> {
        const result = await this._model.findById(this.toObjectId(id)).exec();
        return result;
    }

    private toObjectId(id: string): Types.ObjectId {
        const result = Types.ObjectId(id);
        return result;
    }

}
