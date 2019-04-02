import BaseService from '../Shared/Services/BaseService';
import IConfigurationModel, { schema } from '../Schemas/ConfigurationSchema';

export default class ConfigurationService extends BaseService<IConfigurationModel> {

    constructor() {
        super(schema);
    }

}
