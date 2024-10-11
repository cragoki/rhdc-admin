import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-race-horses',
  templateUrl: './race-horses.component.html',
  styleUrl: './race-horses.component.css'
})
export class RaceHorsesComponent {

  raceId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.raceId = +id;
      }
    });
  }
}