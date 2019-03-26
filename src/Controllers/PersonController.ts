import PersonService from '../Services/PersonService';
import { Request, Response, NextFunction } from 'express';
import IPersonModel from 'Schemas/PersonSchema';
import { BaseController } from './BaseController';
import PersonQueryCommand from '../Commands/PersonQueryCommand';

export default class PersonController extends BaseController {

    private _personService: PersonService;

    constructor() {
        super();
        this._personService = new PersonService();
        this.FindById = this.FindById.bind(this);
        this.Create = this.Create.bind(this);
        this.Find = this.Find.bind(this);
        this.Update = this.Update.bind(this);
        this.Delete = this.Delete.bind(this);
    }

    async Find(req: Request, res: Response, next: NextFunction) {
        const command: PersonQueryCommand = req.body as PersonQueryCommand;
        const result = await this._personService.QueryAsync(command);
        return this.Ok(result, req, res, next);
    }

    async FindById(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const result = await this._personService.FindById(id);
        return this.Ok(result, req, res, next);
    }

    async Create(req: Request, res: Response, next: NextFunction) {
        const value: IPersonModel = req.body as IPersonModel;
        const result = await this._personService.Create(value);
        return this.Ok(result, req, res, next);
    }

    async Update(req: Request, res: Response, next: NextFunction) {
        const value: IPersonModel = req.body as IPersonModel;
        const id: string = req.params.id;
        const result = this._personService.Update(id, value);
        return this.Ok(result, req, res, next);
    }

    async Delete(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const result = this._personService.Delete(id);
        return this.Ok(result, req, res, next);
    }

}
