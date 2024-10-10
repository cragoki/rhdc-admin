import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RaceCourseTableDataSource } from './race-course-table-datasource';
import { RaceCourseModel } from '../../../models/race-course-model.model';
import { ApiServiceService } from '../../../services/api-service.service';

@Component({
  selector: 'app-race-course-table',
  templateUrl: './race-course-table.component.html',
  styleUrl: './race-course-table.component.css'
})
export class RaceCourseTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RaceCourseModel>;

  dataSource!: RaceCourseTableDataSource;
  displayedColumns = ['id', 'name', 'surfaceType', 'grade', 'speedType', 'isAllWeather'];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    // Initialize data source and load alerts
    this.dataSource = new RaceCourseTableDataSource(this.apiService);
    this.dataSource.loadCourses();
  }

  ngAfterViewInit(): void {
    // Set the paginator and sort for the data source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }
}
