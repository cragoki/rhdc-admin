import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { RaceHorsesTableDataSource} from './race-horses-table-datasource';
import { RaceHorseModel } from '../../../models/race-horse-model.model';
import { ApiServiceService } from '../../../services/api-service.service';
import { Router } from 'express';

@Component({
  selector: 'app-race-horses-table',
  templateUrl: './race-horses-table.component.html',
  styleUrl: './race-horses-table.component.css'
})
export class RaceHorsesTableComponent implements AfterViewInit {
  @Input() raceId!: number;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<RaceHorseModel>;

  dataSource!: RaceHorsesTableDataSource;
  displayedColumns = ['id', 'position', 'horseName', 'distanceBetween', 'odds', 'attireCategory', 'age', 'weight', 'jockeyName', 'trainerName'];

  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit() {
    // Initialize data source and load alerts
    this.dataSource = new RaceHorsesTableDataSource(this.apiService);
    this.dataSource.loadRaceHorses(this.raceId);
  }

  ngAfterViewInit(): void {
    // Set the paginator and sort for the data source
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.table.dataSource = this.dataSource;
  }
}