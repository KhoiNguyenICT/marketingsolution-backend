import { QueryResult } from './../../Extensions/QueryResultExtensions';
import QueryCommand from '../../Commands/QueryCommand';

export interface IRead<T> {
    query(command: QueryCommand): Promise<QueryResult<T>>;
    find(filter: any): Promise<T[]>;
    findById(id: string): Promise<T>;
}
