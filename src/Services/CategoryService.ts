import BaseService from '../Shared/Services/BaseService';
import ICategoryModel, { schema } from '../Schemas/CategorySchema';
import CategoryCreateCommand from '../Commands/CategoryCreateCommand';
import StringExtension from '../Extensions/StringExtension';

export default class CategoryService extends BaseService<ICategoryModel> {

    constructor() {
        super(schema);
    }

    async InitializeAsync(items: ICategoryModel[]) {
        const categories = [] as ICategoryModel[];
        items.forEach(item => {
            item.alias = StringExtension.ToSeoUrl(item.name);
            categories.push(item);
        });
        this.Initialize(categories);
    }

    async CreateAsync(command: CategoryCreateCommand) {
        command.alias = StringExtension.ToSeoUrl(command.name);
        const result = await this.Create(command as ICategoryModel);
        return result;
    }

}
