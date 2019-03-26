import { BaseController } from './BaseController';
import CompanyService from '../Services/CompanyService';
import { Request, Response, NextFunction } from 'express';
import ICompanyModel from '../Schemas/CompanySchema';

export default class CompanyController extends BaseController {

    private _companyService: CompanyService;

    constructor() {
        super();
        this._companyService = new CompanyService();
        this.Create = this.Create.bind(this);
    }

    async Create(req: Request, res: Response, next: NextFunction) {
        const value: ICompanyModel = req.body as ICompanyModel;
        const result = await this._companyService.Create(value);
        return this.Ok(result, req, res, next);
    }

}
