export interface AlertModel {
    id: number,
    type: string,
    message: string,
    dateLogged: Date,
    resolved: boolean
}
