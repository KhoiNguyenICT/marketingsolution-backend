import { BaseController } from './BaseController';
import { Request, Response, NextFunction } from 'express';
import * as formidable from 'formidable';
import JsonExtension from '../Extensions/JsonExtension';
import IAssetModel from '../Schemas/AssetSchema';
import * as fs from 'fs';
import AssetService from '../Services/AssetService';

export default class AssetController extends BaseController {

    private _assetService: AssetService;

    constructor() {
        super();
        this._assetService = new AssetService();
        this.Uploads = this.Uploads.bind(this);
    }

    async Uploads(req: Request, res: Response, next: NextFunction) {
        !fs.existsSync(process.env.UPLOAD_DIRECTORY) && fs.mkdirSync(process.env.UPLOAD_DIRECTORY);
        const form = new formidable.IncomingForm();
        form.uploadDir = process.env.UPLOAD_DIRECTORY;
        form.keepExtensions = true;
        form.maxFieldsSize = process.env.MAX_FIELDS_SIZE;
        form.multiples = true;
        form.parse(req, async (error, fields, files) => {
            if (error) {
                res.send(JsonExtension.JsonMessage(`Cannot upload images. Error is: ${error}`));
            }
            const fileItems = files[''] as IAssetModel[];
            if (fileItems.length > 0) {
                const fileNames = [];
                fileItems.forEach((file: any) => {
                    const asset = {
                        original_name: file.name,
                        file_name: file.path.split('\\')[2],
                        file_size: file.size,
                        file_path: file.path,
                        file_type: file.type,
                    } as IAssetModel;
                    fileNames.push(asset);
                });
                const fileDatas = await this._assetService.CreateMany(fileNames);
                return this.Ok(fileDatas, req, res, next);
            } else {
                return this.Ok(JsonExtension.JsonMessage('No images to upload!'), req, res, next);
            }
        });
    }

    async OpenImage(req: any, res: Response, next: NextFunction) {
        const imageName = process.env.UPLOAD_DIRECTORY + '/' + req.query.image_name;
        const image = fs.readFileSync(imageName);
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(image);
    }

}
