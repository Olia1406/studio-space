export interface MobiusData {
    id: string,
    parentId: string | null,
    grpLevel: number,
    name: string,
    calculationType: string,
    methodology: string,
    benchmarks: Array<any>,
    drillable: boolean,
    securities: boolean,
    periods: Array<any>
}