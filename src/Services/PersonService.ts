import { QueryResult } from '../Extensions/QueryResultExtensions';
import BaseService from '../Shared/Services/BaseService';
import IPersonModel from '../Schemas/PersonSchema';
import { schema } from '../Schemas/PersonSchema';
import PersonQueryCommand from '../Commands/PersonQueryCommand';
import PopulateNames from '../Shared/Constants/PopulateNames';
import StringExtension from '../Extensions/StringExtension';

export default class PersonService extends BaseService<IPersonModel> {
    constructor() {
        super(schema);
    }

    async QueryAsync(command: PersonQueryCommand): Promise<QueryResult<IPersonModel>> {
        command.filter = { $text: { $search: command.textSearch } };
        command.populate = StringExtension.PopulateString([PopulateNames.CreatedBy, PopulateNames.UpdatedBy]);
        const result = await this.Query(command);
        return result;
    }

}
