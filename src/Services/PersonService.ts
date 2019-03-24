import { QueryResult } from '../Extensions/QueryResultExtensions';
import BaseService from '../Shared/Services/BaseService';
import IValueModel from '../Schemas/PersonSchema';
import { schema } from '../Schemas/PersonSchema';
import PersonQueryCommand from '../Commands/PersonQueryCommand';
import PopulateNames from '../Shared/Constants/PopulateNames';

export default class PersonService extends BaseService<IValueModel> {
    constructor() {
        super(schema);
    }

    async queryAsync(command: PersonQueryCommand): Promise<QueryResult<IValueModel>> {
        command.filter = { $text: { $search: command.textSearch } };
        command.populate = PopulateNames.Company;
        const result = await this.query(command);
        return result;
    }

}
