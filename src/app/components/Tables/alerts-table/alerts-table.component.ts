import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AlertsTableDataSource } from './alerts-table-datasource';
import { ApiServiceService } from '../../../services/api-service.service';
import { AlertModel } from '../../../models/alert-model.model';

@Component({
  selector: 'app-alerts-table',
  templateUrl: './alerts-table.component.html',
  styleUrls: ['./alerts-table.component.css']
})
export class AlertsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AlertModel>;

  dataSource!: AlertsTableDataSource;
  displayedColumns = ['id', 'type', 'message', 'dateLogged', 'resolve'];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    // Initialize data source and load alerts
    this.dataSource = new AlertsTableDataSource(this.apiService);
    this.dataSource.loadAlerts();
  }

  ngAfterViewInit(): void {
    // Set the paginator and sort for the data source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  onResolve(row: AlertModel): void {
    if(confirm("Are you sure to mark this row as resolved")) {
      this.apiService.updateItem<AlertModel>('Alerts/Resolve', row)
      .subscribe(
        result => {
          window.location.reload();
      }
    );
    }
  }
}