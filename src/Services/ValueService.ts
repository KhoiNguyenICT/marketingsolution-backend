import { QueryResult } from './../Extensions/QueryResultExtensions';
import BaseService from '../Shared/Services/BaseService';
import IValueModel from '../Schemas/ValueSchema';
import { schema } from '../Schemas/ValueSchema';
import StringExtension from '../Extensions/StringExtension';
import QueryCommand from '../Commands/QueryCommand';

export default class ValueService extends BaseService<IValueModel> {
    constructor() {
        super(schema);
    }

    async queryAsync(command: QueryCommand): Promise<QueryResult<IValueModel>> {
        const result = await this.query(command);
        return result;
    }

    async createAsync(model: IValueModel): Promise<IValueModel> {
        model.name_index = StringExtension.Unaccent(model.name);
        model.value_index = StringExtension.Unaccent(model.value);
        const result = await this.create(model);
        return result;
    }
}
