export default interface AccountCreateCommand {
    first_name: string;
    last_name: string;
    was_born: Date;
    is_active: boolean;
    email: string;
    phone_number: string;
    address: string;
    password_hash: string;
    password: string;
}
