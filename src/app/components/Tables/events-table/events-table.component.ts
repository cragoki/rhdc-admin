import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventsTableDataSource } from './events-table-datasource';
import { EventModel } from '../../../models/event-model.model';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrl: './events-table.component.css'
})
export class EventsTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EventModel>;

  dataSource!: EventsTableDataSource;
  displayedColumns = ['id', 'raceCourse', 'date', 'view'];

  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit() {
    // Initialize data source and load alerts
    this.dataSource = new EventsTableDataSource(this.apiService);
    this.dataSource.loadEvents(); // probably pass in the date here in future
  }

  ngAfterViewInit(): void {
    // Set the paginator and sort for the data source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  onView(row: EventModel): void {
    const url = `${window.location.origin}/view-event-races/${row.id}`;
    window.open(url, '_blank');
  }
}