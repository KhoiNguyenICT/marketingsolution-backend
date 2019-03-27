export default class JsonExtension {

    static JsonMessage(message: string): any {
        const result = {
            message: message,
        };
        return result;
    }

    static TokenMessage(token: string): any {
        const result = {
            token: token,
        };
        return result;
    }

}
