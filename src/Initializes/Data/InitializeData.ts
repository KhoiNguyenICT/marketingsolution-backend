import PersonService from '../../Services/PersonService';
import IPersonModel from '../../Schemas/PersonSchema';
import * as fs from 'fs';

export class InitializeData {

    private _personService: PersonService;

    constructor() {
        this._personService = new PersonService();
        this.initPersonData = this.initPersonData.bind(this);
    }

    init() {
        this.initPersonData();
    }

    async initPersonData() {
        const path = `${__dirname}\\Persons.json`;
        const json = await fs.readFileSync(path, 'utf8');
        const items = JSON.parse(json) as IPersonModel[];
        this._personService.initialize(items);
    }
}
