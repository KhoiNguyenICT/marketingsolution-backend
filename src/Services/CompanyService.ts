import BaseService from '../Shared/Services/BaseService';
import { schema } from '../Schemas/CompanySchema';
import ICompanyModel from '../Schemas/CompanySchema';

export default class CompanyService extends BaseService<ICompanyModel> {

    constructor() {
        super(schema);
    }

}
