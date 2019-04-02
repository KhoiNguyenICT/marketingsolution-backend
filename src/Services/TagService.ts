import BaseService from '../Shared/Services/BaseService';
import ITagModel, { schema } from '../Schemas/TagSchema';

export default class TagService extends BaseService<ITagModel> {

    constructor() {
        super(schema);
    }

}
