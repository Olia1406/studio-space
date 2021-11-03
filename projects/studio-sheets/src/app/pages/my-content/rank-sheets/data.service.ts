import { Injectable } from '@angular/core';
import { Card } from 'studio-lib-prefixed';
import * as mobiusData from '../../../../assets/mobiusData.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  rankSheetList:Array<Card> = [
    {
    id: ​11​,
    contentItemSrc: 'sheet.png',
    cardName: 'Rank sheet',
    cardIconClass: 'pi pi-list'
  },
  {
    id: ​12​,
    contentItemSrc: 'datatable.png',
    cardName: 'Rank sheet 2',
    cardIconClass: 'bi bi-house-door-fill'
  }
]

  nestedData : any = (mobiusData as any).default;

  constructor() { }

  transformNestedData(data: Object | any): Object {
    const newData = { asOfDate: data.asOfDate, performanceData: this.fromNestedToOneLevel(data.performanceData) };
    return newData
  }

  fromNestedToOneLevel(arrOfObj: Array<any>): Array<any> {
    const oneLevelArr: Array<any> = [];

    for (const obj of arrOfObj) {
      const parentID = obj.parentId ? obj.parentId : null;
      const groupLevel = obj.grpLevel ? obj.grpLevel : 1;

      if (obj.group) {
        for (const item of obj.group) {
          item.parentId = obj.id;
          item.grpLevel = groupLevel + 1;
        }
      };

      const oneLevel = [
        {
          id: obj.id,
          parentId: parentID,
          grpLevel: groupLevel,
          name: obj.name,
          calculationType: obj.calculationType,
          methodology: obj.methodology,
          benchmarks: obj.benchmarks,
          drillable: obj.drillable,
          securities: obj.securities,
          periods: obj.periods
        },
        ...(obj.group ? this.fromNestedToOneLevel(obj.group) : [])
      ]
      oneLevelArr.push(...oneLevel);
    }
    return oneLevelArr
  }

}
