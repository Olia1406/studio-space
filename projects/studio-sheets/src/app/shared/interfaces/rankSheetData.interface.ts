import { MobiusData } from "../../pages/my-content/rank-sheets/data.interface";

export interface FullMobiusData { 
    asOfDate: string, 
    performanceData: Array<MobiusData> 
}