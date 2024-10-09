export interface RaceCourseModel {
    id: number,
    name: string,
    surfaceType: string,
    grade: number,
    speedType: string,
    isAllWeather: boolean,
    surfaceTypes: string[],
    speedTypes: string[]
}
