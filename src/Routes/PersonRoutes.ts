import * as express from 'express';
import PersonController from '../Controllers/PersonController';

export default class PersonRoutes {
    private readonly _personController: PersonController;
    constructor() {
        this._personController = new PersonController();
    }
    get Routes() {
        const router = express();
        const controller = this._personController;
        router.post('/list', controller.Find);
        router.post('/create', controller.Create);
        router.put('/:id', controller.Update);
        router.get('/:id', controller.FindById);
        router.delete('/:id', controller.Delete);

        return router;
    }
}
