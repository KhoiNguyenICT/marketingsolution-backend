import { QueryResult } from '../Extensions/QueryResultExtensions';
import BaseService from '../Shared/Services/BaseService';
import IValueModel from '../Schemas/PersonSchema';
import { schema } from '../Schemas/PersonSchema';
import ValueQueryCommand from '../Commands/ValueQueryCommand';

export default class PersonService extends BaseService<IValueModel> {
    constructor() {
        super(schema);
    }

    async queryAsync(command: ValueQueryCommand): Promise<QueryResult<IValueModel>> {
        command.filter = { $text: { $search: command.textSearch } };
        const result = await this.query(command);
        return result;
    }

}
