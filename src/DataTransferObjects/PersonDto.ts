import AccountDto from './AccountDto';

export default class PersonDto {
    name: string;
    level: string;
    company: string;
    created_by: AccountDto;
    updated_by: AccountDto;
    created_at: Date;
    updated_at: Date;
}
