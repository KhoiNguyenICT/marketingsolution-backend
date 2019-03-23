import QueryCommand from './QueryCommand';

export default class ValueQueryCommand implements QueryCommand {
    currentPage: number;
    pageSize: number;
    filter: any;
    textSearch: string;
}
