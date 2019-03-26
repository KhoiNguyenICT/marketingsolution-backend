import BaseService from '../Shared/Services/BaseService';
import IAccountModel, { schema } from '../Schemas/AccountSchema';
import AccountCreateCommand from '../Commands/AccountCreateCommand';
import * as bcrypt from 'bcryptjs';

export default class AccountService extends BaseService<IAccountModel> {

    constructor() {
        super(schema);
    }

    async CreateAsync(command: AccountCreateCommand) {
        command.password_hash = await bcrypt.hash(command.password, 10);
        const result = await this.Create(command as IAccountModel);
        return result;
    }

}
