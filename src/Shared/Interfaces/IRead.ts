import { Document, Model, Types } from 'mongoose';

export interface IRead<T> {
    find(filter: any);
    findById(id: string);
}
