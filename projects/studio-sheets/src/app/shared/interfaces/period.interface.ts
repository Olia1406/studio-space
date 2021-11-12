export interface Period {
    type: string,
    startDate: string,
    endDate: string,
    returnType: string,
    fundReturn: number,
    benchmarkReturn: number,
    valueAdd: number,
    fundWeight: number,
    benchmarkWeight: number,
    fundCTR: number,
    benchmarkCTR: number,
    relativeCTR: number,
    statusCode: number,
    message: string
}