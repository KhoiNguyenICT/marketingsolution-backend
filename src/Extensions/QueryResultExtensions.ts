export interface IQueryResult<T> {
    Results: T[];
    CurrentPage: number;
    PageSize: number;
    RowCount: number;
    FirstRowOnPage(): number;
    LastRowOnPage(): number;
    PageCount(): number;
}

export class QueryResult<T> implements IQueryResult<T> {

    Results: T[];
    CurrentPage: number;
    PageSize: number;
    RowCount: number;

    FirstRowOnPage() {
        return (this.CurrentPage - 1) * this.PageSize - 1;
    }

    LastRowOnPage() {
        return Math.min(this.CurrentPage * this.PageSize, this.RowCount);
    }

    PageCount() {
        const pageCount = (this.RowCount / this.PageSize);
        return Math.ceil(pageCount);
    }

}
