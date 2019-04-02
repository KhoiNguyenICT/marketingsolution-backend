export default interface AccountClaimCommand {
    account_id: string;
    email: string;
    first_name: string;
    last_name: string;
    is_active: boolean;
    phone_number: string;
    address: string;
    created_at: Date;
    updated_at: Date;
}
