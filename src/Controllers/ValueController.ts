import ValueService from './../Services/ValueService';
import { Request, Response, NextFunction } from 'express';
import IValueModel from 'Schemas/ValueSchema';
import { BaseController } from './BaseController';
import QueryCommand from '../Commands/QueryCommand';
import LogService from '../Services/LogService';

export default class ValueController extends BaseController {

    private _valueService: ValueService;
    private _logService: LogService;

    constructor() {
        super();
        this._valueService = new ValueService();
        this._logService = new LogService();
        this.findById = this.findById.bind(this);
        this.create = this.create.bind(this);
        this.find = this.find.bind(this);
    }

    async find(req: Request, res: Response, next: NextFunction) {
        const command: QueryCommand = req.body as QueryCommand;
        const result = await this._valueService.queryAsync(command);
        this._logService.info('Find Values');
        return this.Ok(result, req, res, next);
    }

    async findById(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const result = await this._valueService.findById(id);
        return this.Ok(result, req, res, next);
    }

    async create(req: Request, res: Response, next: NextFunction) {
        const value: IValueModel = req.body as IValueModel;
        const result = await this._valueService.createAsync(value);
        return this.Ok(result, req, res, next);
    }

    async update(req: Request, res: Response, next: NextFunction) {
        const value: IValueModel = req.body as IValueModel;
        const id: string = req.params.id;
        const result = this._valueService.update(id, value);
        return this.Ok(result, req, res, next);
    }

    async delete(req: Request, res: Response, next: NextFunction) {
        const id: string = req.params.id;
        const result = this._valueService.delete(id);
        return this.Ok(result, req, res, next);
    }

}
