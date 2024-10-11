import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../../services/api-service.service';
import { EventModel } from '../../../models/event-model.model';

export class EventsTableDataSource extends MatTableDataSource<EventModel> {
  constructor(private apiService: ApiServiceService) {
    super(); // Call the constructor of MatTableDataSource
  }

  loadEvents() {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      this.apiService.getItems<EventModel>(`Event/GetEvents?date=${yesterday}`).subscribe((errors: EventModel[]) => {
      this.data = errors; 
    });
  }
}