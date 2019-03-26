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

    async Initialize(items: T[]) {
        const data = await this._model.find({});
        if (data.length === 0) {
            await this._model.insertMany(items);
        }
    }

    async Query(command: QueryCommand): Promise<QueryResult<T>> {
        (command.textSearch) ? (command.filter = { $text: { $search: command.textSearch } }) : (command.filter = null);
        (command.populate) ? (command.populate) : (command.populate = '');
        const data = await this._model.find(command.filter)
            .populate(command.populate)
            .sort({ updated_at: -1 })
            .skip((command.currentPage - 1) * command.pageSize)
            .limit(command.pageSize);
        const paginationResult = new QueryResult<T>();
        paginationResult.CurrentPage = command.currentPage;
        paginationResult.RowCount = await this._model.find(command.filter).countDocuments();
        paginationResult.PageSize = command.pageSize;
        paginationResult.Results = data;
        return paginationResult;
    }

    async Create(item: T): Promise<T> {
        const result = await this._model.create(item);
        return result;
    }

    async Find(filter = {}): Promise<T[]> {
        const result = await this._model.find(filter).exec();
        return result;
    }

    async Update(id: string, item: T): Promise<T> {
        const result = await this._model.findByIdAndUpdate(this.ToObjectId(id), item);
        return result;
    }

    async Delete(id: string): Promise<T> {
        const result = await this._model.findByIdAndRemove(this.ToObjectId(id)).exec();
        return result;
    }

    async FindById(id: string): Promise<T> {
        const result = await this._model.findById(this.ToObjectId(id)).exec();
        return result;
    }

    private ToObjectId(id: string): Types.ObjectId {
        const result = Types.ObjectId(id);
        return result;
    }

}
