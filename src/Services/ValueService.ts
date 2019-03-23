import { QueryResult } from './../Extensions/QueryResultExtensions';
import BaseService from '../Shared/Services/BaseService';
import IValueModel from '../Schemas/ValueSchema';
import { schema } from '../Schemas/ValueSchema';
import StringExtension from '../Extensions/StringExtension';
import ValueQueryCommand from '../Commands/ValueQueryCommand';

export default class ValueService extends BaseService<IValueModel> {
    constructor() {
        super(schema);
    }

    async queryAsync(command: ValueQueryCommand): Promise<QueryResult<IValueModel>> {
        command.filter = { $text: { $search: command.textSearch } };
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
