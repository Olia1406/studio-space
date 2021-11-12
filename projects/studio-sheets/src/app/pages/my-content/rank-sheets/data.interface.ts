import { Benchmark } from "../../../shared/interfaces/benchmark.interface";
import { Period } from "../../../shared/interfaces/period.interface";

export interface MobiusData {
    id: string,
    parentId: string | null,
    grpLevel: number,
    name: string,
    calculationType: string,
    methodology: string,
    benchmarks: Array<Benchmark>,
    drillable: boolean,
    securities: boolean,
    periods: Array<Period>
}
