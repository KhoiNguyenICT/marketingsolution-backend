import { HttpRequest } from './../Extensions/HttpExtension';
import { BaseController } from './BaseController';
import CompanyService from '../Services/CompanyService';
import { Request, Response, NextFunction } from 'express';
import ICompanyModel from '../Schemas/CompanySchema';
import { Types } from 'mongoose';
import CompanyQueryCommand from '../Commands/CompanyQueryCommand';

export default class CompanyController extends BaseController {

    private _companyService: CompanyService;

    constructor() {
        super();
        this._companyService = new CompanyService();
        this.Create = this.Create.bind(this);
        this.Find = this.Find.bind(this);
    }

    async Find(req: Request, res: Response, next: NextFunction) {
        const command: CompanyQueryCommand = req.body as CompanyQueryCommand;
        const result = await this._companyService.QueryAsync(command);
        return this.Ok(result, req, res, next);
    }

    async Create(req: HttpRequest, res: Response, next: NextFunction) {
        const value: ICompanyModel = req.body as ICompanyModel;
        value.created_by = Types.ObjectId(req.account_data.account_id);
        value.updated_by = Types.ObjectId(req.account_data.account_id);
        const result = await this._companyService.Create(value);
        return this.Ok(result, req, res, next);
    }

}
