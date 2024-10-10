import { MatTableDataSource } from '@angular/material/table';
import { ApiServiceService } from '../../../services/api-service.service';
import { RaceCourseModel } from '../../../models/race-course-model.model';

export class RaceCourseTableDataSource extends MatTableDataSource<RaceCourseModel> {
  constructor(private apiService: ApiServiceService) {
    super(); // Call the constructor of MatTableDataSource
  }

  loadCourses() {
    this.apiService.getItems<RaceCourseModel>('Course').subscribe((errors: RaceCourseModel[]) => {
      this.data = errors; 
    });
  }
}