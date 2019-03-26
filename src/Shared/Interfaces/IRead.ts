import { QueryResult } from './../../Extensions/QueryResultExtensions';
import QueryCommand from '../../Commands/QueryCommand';

export interface IRead<T> {
    Query(command: QueryCommand): Promise<QueryResult<T>>;
    Find(filter: any): Promise<T[]>;
    FindById(id: string): Promise<T>;
}
