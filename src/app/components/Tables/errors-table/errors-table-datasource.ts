import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../../services/api-service.service';
import { ErrorModel } from '../../../models/error-model.model';

export class ErrorsTableDataSource extends MatTableDataSource<ErrorModel> {
  constructor(private apiService: ApiServiceService) {
    super(); // Call the constructor of MatTableDataSource
  }

  loadErrors() {
    this.apiService.getItems<ErrorModel>('ErrorLog/GetUnresolved').subscribe((errors: ErrorModel[]) => {
      this.data = errors; 
    });
  }
}