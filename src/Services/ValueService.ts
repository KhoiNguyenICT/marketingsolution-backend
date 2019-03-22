import BaseService from '../Shared/Services/BaseService';
import IValueModel from '../Schemas/ValueSchema';
import { schema } from '../Schemas/ValueSchema';
import StringExtension from '../Extensions/StringExtension';

export default class ValueService extends BaseService<IValueModel> {
    constructor() {
        super(schema);
    }

    async createAsync(model: IValueModel): Promise<IValueModel> {
        model.name_index = StringExtension.Unaccent(model.name);
        model.value_index = StringExtension.Unaccent(model.value);
        const result = await this.create(model);
        return result;
    }
}
