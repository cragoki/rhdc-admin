export interface ErrorModel {
    id: number,
    tableName: string,
    className: string,
    methodName: string,
    errorType: string,
    stacktrace: string,
    innerException: string,
    message: string,
    date: Date
}
