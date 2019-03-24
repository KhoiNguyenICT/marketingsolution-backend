export default interface QueryCommand {
    currentPage: number;
    pageSize: number;
    filter: any;
    textSearch: string;
    populate: any;
}
