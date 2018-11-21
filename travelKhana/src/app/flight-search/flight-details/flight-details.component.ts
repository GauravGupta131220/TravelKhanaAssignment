import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css']
})
export class FlightDetailsComponent implements OnInit {

  @Input() flightDetails;

  flightSearchDetails;
  p: number = 1;
  constructor() { }

  ngOnInit() {
    this.flightSearchDetails = this.flightDetails;
  }

}
