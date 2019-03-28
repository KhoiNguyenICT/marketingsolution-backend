import QueryCommand from './QueryCommand';

export default class CompanyQueryCommand implements QueryCommand {
    currentPage: number;
    pageSize: number;
    filter: any;
    textSearch: string;
    populate: any;
}
