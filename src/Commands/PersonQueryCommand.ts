import QueryCommand from './QueryCommand';

export default interface PersonQueryCommand extends QueryCommand {
    currentPage: number;
    pageSize: number;
    filter: any;
    textSearch: string;
    populate: any;
}
