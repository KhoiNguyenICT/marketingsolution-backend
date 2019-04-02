import * as fs from 'fs';
import PersonService from '../../Services/PersonService';
import IPersonModel from '../../Schemas/PersonSchema';
import IConfigurationModel from '../../Schemas/ConfigurationSchema';
import ITagModel from '../../Schemas/TagSchema';
import ConfigurationService from '../../Services/ConfigurationService';
import TagService from '../../Services/TagService';
import ICategoryModel from '../../Schemas/CategorySchema';
import CategoryService from '../../Services/CategoryService';

export class InitializeData {

    private _personService: PersonService;
    private _configurationService: ConfigurationService;
    private _tagService: TagService;
    private _categoryService: CategoryService;

    constructor() {
        this._personService = new PersonService();
        this._configurationService = new ConfigurationService();
        this._tagService = new TagService();
        this._categoryService = new CategoryService();
        this.InitPersonData = this.InitPersonData.bind(this);
        this.InitConfiguration = this.InitConfiguration.bind(this);
        this.InitTags = this.InitTags.bind(this);
        this.InitCategories = this.InitCategories.bind(this);
    }

    async Init() {
        if (process.env.ENVIRONMENT_HOSTING === 'development') {
            await this.InitPersonData();
            await this.InitConfiguration();
            await this.InitTags();
            await this.InitCategories();
        }
    }

    async InitPersonData() {
        const json = await fs.readFileSync(this.CreatePath('Persons.json'), 'utf8');
        const items = JSON.parse(json) as IPersonModel[];
        this._personService.Initialize(items);
    }

    async InitConfiguration() {
        const json = await fs.readFileSync(this.CreatePath('Configurations.json'), 'utf8');
        const items = JSON.parse(json) as IConfigurationModel[];
        this._configurationService.Initialize(items);
    }

    async InitTags() {
        const json = await fs.readFileSync(this.CreatePath('Tags.json'), 'utf8');
        const items = JSON.parse(json) as ITagModel[];
        this._tagService.Initialize(items);
    }

    async InitCategories() {
        const json = await fs.readFileSync(this.CreatePath('Categories.json'), 'utf8');
        const items = JSON.parse(json) as ICategoryModel[];
        this._categoryService.InitializeAsync(items);
    }

    private CreatePath(fileName: string): string {
        return `${__dirname}\\${fileName}`;
    }

}
