import AssetController from '../Controllers/AssetController';
import * as express from 'express';

export default class AssetRoutes {

    private readonly _assetController: AssetController;

    constructor() {
        this._assetController = new AssetController();
    }

    get Routes() {
        const router = express();
        const controller = this._assetController;
        router.post('/uploads', controller.Uploads);
        router.get('/open', controller.OpenImage);
        return router;
    }

}
