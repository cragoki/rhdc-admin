import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RacesTableDataSource } from './races-table-datasource';
import { RaceModel } from '../../../models/race-model.model';
import { ApiServiceService } from '../../../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races-table',
  templateUrl: './races-table.component.html',
  styleUrl: './races-table.component.css'
})
export class RacesTableComponent implements AfterViewInit {
  @Input() eventId!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RaceModel>;

  dataSource!: RacesTableDataSource;
  displayedColumns = ['id', 'class', 'raceUrl', 'raceType', 'ageCategory', 'goingCategory', 'distanceCategory', 'view'];

  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit() {
    // Initialize data source and load alerts
    this.dataSource = new RacesTableDataSource(this.apiService);
    console.log(this.eventId);
    this.dataSource.loadRaces(this.eventId); 
  }

  ngAfterViewInit(): void {
    // Set the paginator and sort for the data source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }

  onView(row: RaceModel): void {
    const url = `${window.location.origin}/view-race-horses/${row.id}`;
    window.open(url, '_blank');
  }
}
