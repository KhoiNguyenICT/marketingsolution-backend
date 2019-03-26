import PersonService from '../../Services/PersonService';
import IPersonModel from '../../Schemas/PersonSchema';
import * as fs from 'fs';

export class InitializeData {

    private _personService: PersonService;

    constructor() {
        this._personService = new PersonService();
        this.InitPersonData = this.InitPersonData.bind(this);
    }

    async Init() {
        if (process.env.ENVIRONMENT_HOSTING === 'development') {
            await this.InitPersonData();
        }
    }

    async InitPersonData() {
        const json = await fs.readFileSync(this.CreatePath('Persons.json'), 'utf8');
        const items = JSON.parse(json) as IPersonModel[];
        this._personService.Initialize(items);
    }

    private CreatePath(fileName: string): string {
        return `${__dirname}\\${fileName}`;
    }

}
