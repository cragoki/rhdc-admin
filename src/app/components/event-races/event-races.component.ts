import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-races',
  templateUrl: './event-races.component.html',
  styleUrl: './event-races.component.css'
})
export class EventRacesComponent {
  eventId!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.eventId = +id;
      }
    });
  }
}