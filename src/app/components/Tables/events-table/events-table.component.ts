import { AfterViewInit, Component, Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EventsTableDataSource } from './events-table-datasource';
import { EventModel } from '../../../models/event-model.model';
import { Router } from '@angular/router';
import { ApiServiceService } from '../../../services/api-service.service';
import { FormsModule } from '@angular/forms';

 
@Component({
  selector: 'app-events-table',
  templateUrl: './events-table.component.html',
  styleUrls: ['./events-table.component.css']
})
export class EventsTableComponent implements AfterViewInit, OnChanges {
  selectedDate: string = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<EventModel>;

  dataSource!: EventsTableDataSource;
  displayedColumns = ['id', 'raceCourse', 'date', 'view'];

  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit() {
    // Initialize data source and load events
    this.setYesterdayDate();
    this.dataSource = new EventsTableDataSource(this.apiService);
    this.loadEvents(); 
  }

  ngAfterViewInit(): void {
    // Set paginator and sort for the data source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  // Detects changes to the input properties (i.e., when the date changes)
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['selectedDate']);
    if (changes['selectedDate'] && !changes['selectedDate'].firstChange) {
      // The date has changed, so reload the events with the new date
      this.loadEvents();
    }
  }

  // Method to load events with the current date
  loadEvents(): void {
    this.dataSource.loadEvents(this.selectedDate);
  }

  onView(row: EventModel): void {
    const url = `${window.location.origin}/view-event-races/${row.id}`;
    window.open(url, '_blank');
  }

  onDateChange(newDate: string): void {
    console.log('Date changed in parent:', newDate);
  
    // Create a new string reference to force change detection
    this.selectedDate = newDate ? newDate.slice(0) : '';
    this.dataSource.loadEvents(this.selectedDate);
  }

  
  setYesterdayDate(): void {
    const today = new Date();
    const yesterdayDate = new Date(today);
    yesterdayDate.setDate(today.getDate() - 1);

    const year = yesterdayDate.getFullYear();
    const month = (yesterdayDate.getMonth() + 1).toString().padStart(2, '0');
    const day = yesterdayDate.getDate().toString().padStart(2, '0');

    this.selectedDate = `${year}-${month}-${day}`;
  }
}