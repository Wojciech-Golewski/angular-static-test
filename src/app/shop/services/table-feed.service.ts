import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export class TableData {
  headings: string[];
  data: CellData[]
}

export class CellData {
  id: number;
  name: string;
  cost: number;
}

@Injectable({
  providedIn: 'root'
})
export class TableFeedService {

  private data: TableData = {
      headings: ['id', 'name', 'cost'],
      data: [
          {
              id: 1,
              name: 'Magic wand',
              cost: 99.99
          },
          {
              id: 2,
              name: 'Roof Woof',
              cost: 929.99
          },
          {
              id: 3,
              name: 'Wheel',
              cost: 10
          }
      ]
  }

  constructor() { }

  getAllData(): Observable<TableData> {
    return of(this.data);
  }
}
