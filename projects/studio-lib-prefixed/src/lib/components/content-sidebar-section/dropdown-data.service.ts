import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DropdownDataService {
  filterValuesList = new BehaviorSubject<any>({});
  constructor() { }  
}
