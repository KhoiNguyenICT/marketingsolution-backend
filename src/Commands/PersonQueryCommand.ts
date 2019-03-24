import QueryCommand from './QueryCommand';

export default class PersonQueryCommand implements QueryCommand {
    currentPage: number;
    pageSize: number;
    filter: any;
    textSearch: string;
    populate: any;
}
