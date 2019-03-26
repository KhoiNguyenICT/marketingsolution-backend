export interface IWrite<T> {
    Create(item: T): Promise<T>;
    Update(id: string, item: T): Promise<T>;
    Delete(id: string): Promise<T>;
}
