import { QueryResult } from '../Extensions/QueryResultExtensions';
import BaseService from '../Shared/Services/BaseService';
import IPersonModel from '../Schemas/PersonSchema';
import { schema } from '../Schemas/PersonSchema';
import PersonQueryCommand from '../Commands/PersonQueryCommand';

export default class PersonService extends BaseService<IPersonModel> {
    constructor() {
        super(schema);
    }

    async QueryAsync(command: PersonQueryCommand): Promise<QueryResult<IPersonModel>> {
        command.filter = { $text: { $search: command.textSearch } };
        const result = await this.Query(command);
        return result;
    }

}
