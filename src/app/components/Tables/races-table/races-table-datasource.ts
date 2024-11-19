import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../../services/api-service.service';
import { RaceModel } from '../../../models/race-model.model';

export class RacesTableDataSource extends MatTableDataSource<RaceModel> {
  constructor(private apiService: ApiServiceService) {
    super(); // Call the constructor of MatTableDataSource
  }

  loadRaces(eventId: number) {
      this.apiService.getItems<RaceModel>(`Race/GetRacesForEvent?eventId=${eventId}`).subscribe((errors: RaceModel[]) => {
      this.data = errors; 
    });
  }
}