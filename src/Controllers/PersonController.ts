import PersonService from '../Services/PersonService';
import { Request, Response, NextFunction } from 'express';
import IPersonModel from 'Schemas/PersonSchema';
import { BaseController } from './BaseController';
import ValueQueryCommand from '../Commands/ValueQueryCommand';

export default class PersonController extends BaseController {

    private _personService: PersonService;

    constructor() {
        super();
        this._personService = new PersonService();
        this.findById = this.findById.bind(this);
        this.create = this.create.bind(this);
        this.find = this.find.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
    }

    async find(req: Request, res: Response, next: NextFunction) {
        const command: ValueQueryCommand = req.body as ValueQueryCommand;
        const result = await this._personService.queryAsync(command);
        return this.Ok(result, req, res, next);
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const result = await this._personService.findById(id);
        return this.Ok(result, req, res, next);
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const value: IPersonModel = req.body as IPersonModel;
        const result = await this._personService.create(value);
        return this.Ok(result, req, res, next);
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const value: IPersonModel = req.body as IPersonModel;
        const id: string = req.params.id;
        const result = this._personService.update(id, value);
        return this.Ok(result, req, res, next);
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const result = this._personService.delete(id);
        return this.Ok(result, req, res, next);
    }

}
