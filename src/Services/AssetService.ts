import BaseService from '../Shared/Services/BaseService';
import IAssetModel, { schema } from '../Schemas/AssetSchema';

export default class AssetService extends BaseService<IAssetModel> {

    constructor() {
        super(schema);
    }

}
