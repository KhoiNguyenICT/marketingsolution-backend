import PersonService from '../../Services/PersonService';
import IPersonModel from '../../Schemas/PersonSchema';
import * as fs from 'fs';

export class InitializeData {

    private _personService: PersonService;

    constructor() {
        this._personService = new PersonService();
        this.initPersonData = this.initPersonData.bind(this);
    }

    async init() {
        if (process.env.ENVIRONMENT_HOSTING === 'development') {
            await this.initPersonData();
        }
    }

    async initPersonData() {
        const json = await fs.readFileSync(this.createPath('Persons.json'), 'utf8');
        const items = JSON.parse(json) as IPersonModel[];
        this._personService.initialize(items);
    }

    private createPath(fileName: string): string {
        return `${__dirname}\\${fileName}`;
    }

}
