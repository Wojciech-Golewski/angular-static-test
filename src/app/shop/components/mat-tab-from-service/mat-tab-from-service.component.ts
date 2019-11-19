import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TableData, TableFeedService } from '../../services/table-feed.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-mat-tab-from-service',
  templateUrl: './mat-tab-from-service.component.html',
  styleUrls: ['./mat-tab-from-service.component.scss']
})
export class MatTabFromServiceComponent implements OnInit {
  displayedColumns: string[];
  dataSource: MatTableDataSource<TableData>;
  dataToTable: any[] = [];
  propertyMapToValue: Map<string, string> = new Map<string, string>([
    [ 'id', 'ID' ],
    [ 'name', 'Name' ],
    [ 'cost', 'Price' ]
  ])
  
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private tableFeedService: TableFeedService) { }

  ngOnInit() {
    this.tableFeedService.getAllData().subscribe(data => {
      this.displayedColumns = data.headings;
      this.dataToTable.push(data);
      this.dataSource = new MatTableDataSource(this.dataToTable[0].data);
    },
    (error) => {
      // TODO: Errors Logging should be here
      console.log('Error encountered : ', error);
    },
    () => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
