import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ErrorsTableDataSource } from './errors-table-datasource';
import { ErrorModel } from '../../../models/error-model.model';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-errors-table',
  templateUrl: './errors-table.component.html',
  styleUrl: './errors-table.component.css'
})
export class ErrorsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<ErrorModel>;

  dataSource!: ErrorsTableDataSource;
  displayedColumns = ['id', 'tableName', 'className', 'methodName', 'errorType', 'stacktrace', 'innerException', 'message', 'date', 'resolve'];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    // Initialize data source and load alerts
    this.dataSource = new ErrorsTableDataSource(this.apiService);
    this.dataSource.loadErrors();
  }

  ngAfterViewInit(): void {
    // Set the paginator and sort for the data source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  onResolve(row: ErrorModel): void {
    if(confirm("Are you sure to mark this row as resolved")) {
      this.apiService.updateItem<ErrorModel>('ErrorLog/Resolve', row)
      .subscribe(
        result => {
          window.location.reload();
      }
    );    }
  }
}