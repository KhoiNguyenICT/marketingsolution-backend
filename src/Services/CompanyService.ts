import { QueryResult } from '../Extensions/QueryResultExtensions';
import BaseService from '../Shared/Services/BaseService';
import { schema } from '../Schemas/CompanySchema';
import ICompanyModel from '../Schemas/CompanySchema';
import CompanyQueryCommand from '../Commands/CompanyQueryCommand';
import StringExtension from '../Extensions/StringExtension';
import PopulateNames from '../Shared/Constants/PopulateNames';

export default class CompanyService extends BaseService<ICompanyModel> {

    constructor() {
        super(schema);
    }

    async QueryAsync(command: CompanyQueryCommand): Promise<QueryResult<ICompanyModel>> {
        command.filter = { $text: { $search: command.textSearch } };
        command.populate = StringExtension.PopulateString([PopulateNames.CreatedBy, PopulateNames.UpdatedBy]);
        const result = await this.Query(command);
        return result;
    }

}
