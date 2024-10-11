import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../../services/api-service.service';
import { RaceHorseModel } from '../../../models/race-horse-model.model';

export class RaceHorsesTableDataSource extends MatTableDataSource<RaceHorseModel> {
  constructor(private apiService: ApiServiceService,) {
    super(); // Call the constructor of MatTableDataSource
  }

  loadRaceHorses(raceId : number) {
      this.apiService.getItems<RaceHorseModel>(`Race/GetHorsesForRace?id=${raceId}`).subscribe((errors: RaceHorseModel[]) => {
      this.data = errors; 
    });
  }
}