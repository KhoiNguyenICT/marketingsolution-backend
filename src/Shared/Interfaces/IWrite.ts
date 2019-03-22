export interface IWrite<T> {
    create(item: T);
    update: (id: string, item: T, callback: (error: any, result: any) => void) => void;
    delete: (id: string, callback: (error: any, result: any) => void) => void;
}
