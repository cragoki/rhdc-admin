import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RaceCourseModel } from '../../models/race-course-model.model';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-edit-racecourse',
  templateUrl: './edit-racecourse.component.html',
  styleUrls: ['./edit-racecourse.component.css']
})
export class EditRaceCourseComponent implements OnInit {
  raceCourseForm!: FormGroup;
  raceCourse: RaceCourseModel | null = null;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private apiService: ApiServiceService // Inject the API service
  ) {}

  ngOnInit(): void {
    // Retrieve the id from the route parameters
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.fetchRaceCourse(id);  // Fetch the race course data based on the id
      }
    });
  }

  // Method to fetch the race course data by id
  fetchRaceCourse(id: string): void {
    this.apiService.getItem<RaceCourseModel>(`Course/GetRaceCourse?id=${id}`).subscribe(
      (data) => {
        this.raceCourse = data;
        this.initForm();  // Initialize the form once the data is fetched
      }
    );
  }

  // Initialize the form with the fetched data
  initForm() {
    console.log(this.raceCourse);
    this.raceCourseForm = this.fb.group({
      id: [{ value: this.raceCourse?.id, disabled: true }],  // id is disabled
      name: [{ value: this.raceCourse?.name, disabled: true }, Validators.required], // name is displayed but not editable
      surfaceType: [this.raceCourse?.surfaceType, Validators.required],
      grade: [this.raceCourse?.grade, Validators.required],
      speedType: [this.raceCourse?.speedType, Validators.required],
      isAllWeather: [this.raceCourse?.isAllWeather ?? false, Validators.required]
    });
  }

  // Handle form submission
  onSubmit() {
    if (this.raceCourseForm.valid) {
      console.log(this.raceCourseForm.value);
      // Submit logic here
    }
  }
}