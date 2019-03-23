export interface IQueryResult<T> {
    results: T[];
    currentPage: number;
    pageSize: number;
    rowCount: number;
    firstRowOnPage(): number;
    lastRowOnPage(): number;
    pageCount(): number;
}

export class QueryResult<T> implements IQueryResult<T> {

    results: T[];
    currentPage: number;
    pageSize: number;
    rowCount: number;

    firstRowOnPage() {
        const tmp = (this.currentPage - 1) * this.pageSize - 1;
        return (this.currentPage - 1) * this.pageSize - 1;
    }

    lastRowOnPage() {
        return Math.min(this.currentPage * this.pageSize, this.rowCount);
    }

    pageCount() {
        const pageCount = (this.rowCount / this.pageSize);
        return Math.ceil(pageCount);
    }

}
