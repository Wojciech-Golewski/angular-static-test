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
          },
          {
            id: 4,
            name: 'Chasis',
            cost: 5400
          },
          {
            id: 5,
            name: 'Good Diesel Car',
            cost: 13000
          },
          {
            id: 6,
            name: 'Free Stuff',
            cost: 0
          },
          {
            id: 7,
            name: 'RC Space Shuttle',
            cost: 2000
          }
      ]
  }

  constructor() { }

  getAllData(): Observable<TableData> {
    return of(this.data);
  }
}
