import { MatTableDataSource } from '@angular/material/table';
import { AlertModel } from '../../../models/alert-model.model';
import { ApiServiceService } from '../../../services/api-service.service';

export class AlertsTableDataSource extends MatTableDataSource<AlertModel> {
  constructor(private apiService: ApiServiceService) {
    super(); // Call the constructor of MatTableDataSource
  }

  loadAlerts() {
    this.apiService.getAlerts().subscribe(alerts => {
      this.data = alerts; // MatTableDataSource has a `data` property
    });
  }
}