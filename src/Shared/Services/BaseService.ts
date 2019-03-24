import { QueryResult } from './../../Extensions/QueryResultExtensions';
import { Document, Model, Types } from 'mongoose';
import { IRead } from '../Interfaces/IRead';
import { IWrite } from '../Interfaces/IWrite';
import QueryCommand from '../../Commands/QueryCommand';

export default class BaseService<T extends Document> implements IRead<T>, IWrite<T> {

    protected _model: Model<T>;

    constructor(schemaModel: Model<T>) {
        this._model = schemaModel;
    }

    async query(command: QueryCommand): Promise<QueryResult<T>> {
        (command.textSearch) ? (command.filter = { $text: { $search: command.textSearch } }) : (command.filter = null);
        (command.populate) ? (command.populate) : (command.populate = '');
        const data = await this._model.find(command.filter)
            .populate(command.populate)
            .sort({ updated_at: -1 })
            .skip((command.currentPage - 1) * command.pageSize)
            .limit(command.pageSize);
        const paginationResult = new QueryResult<T>();
        paginationResult.currentPage = command.currentPage;
        paginationResult.rowCount = await this._model.find(command.filter).countDocuments();
        paginationResult.pageSize = command.pageSize;
        paginationResult.results = data;
        return paginationResult;
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
