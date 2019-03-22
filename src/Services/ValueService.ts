import BaseService from '../Shared/Services/BaseService';
import IValueModel from '../Schemas/ValueSchema';
import { schema } from '../Schemas/ValueSchema';

export default class ValueService extends BaseService<IValueModel> {
    constructor() {
        super(schema);
    }
}
