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
    private apiService: ApiServiceService 
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.fetchRaceCourse(id);  
      }
    });
  }

  fetchRaceCourse(id: string): void {
    this.apiService.getItem<RaceCourseModel>(`Course/GetRaceCourse?id=${id}`).subscribe(
      (data) => {
        this.raceCourse = data;
        this.initForm(); 
      }
    );
  }

  initForm() {
    this.raceCourseForm = this.fb.group({
      id: [{ value: this.raceCourse?.id, disabled: true }],  
      name: [{ value: this.raceCourse?.name, disabled: true }, Validators.required], 
      surfaceType: [this.raceCourse?.surfaceType, Validators.required],
      grade: [this.raceCourse?.grade, Validators.required],
      speedType: [this.raceCourse?.speedType, Validators.required],
      isAllWeather: [this.raceCourse?.isAllWeather ?? false, Validators.required]
    });
  }

  onSubmit() {
    if (this.raceCourseForm.valid) {
    // Temporarily enable 'id' and 'name' fields (surely this can't be the way angular, come on)
      this.raceCourseForm.get('id')?.enable();
      this.raceCourseForm.get('name')?.enable();

        this.apiService.updateItem<RaceCourseModel>('Course/EditRaceCourse', this.raceCourseForm.value)
            .subscribe(
                result => {
                    alert('Course saved');
                    this.raceCourseForm.get('id')?.disable();
                    this.raceCourseForm.get('name')?.disable();
                }
            );
    }
}
}