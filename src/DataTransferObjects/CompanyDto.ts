import AccountDto from './AccountDto';

export default class CompanyDto {
    name: string;
    address: string;
    created_by: AccountDto;
    updated_by: AccountDto;
    created_at: Date;
    updated_at: Date;
}
