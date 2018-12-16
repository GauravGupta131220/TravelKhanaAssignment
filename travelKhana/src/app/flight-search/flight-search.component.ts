import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { IMyDpOptions } from 'mydatepicker';
import { DxRangeSelectorModule } from 'devextreme-angular';
import { FetchFlightsService } from '../common-services/fetch-flights.service';

@Component({
    selector: 'app-flight-search',
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

    constructor(private spinnerService: Ng4LoadingSpinnerService, private flightDetailsService: FetchFlightsService) { }

    ngOnInit() { }

    viewMode='oneWay';

    public myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'dd/mm/yyyy',
    };

    journeyDetails = {
        deatils: {
            oneway: "",
            return: "",
            departureDate: "",
            returnDate: ""
        }
    };

    flights = [];
    selectedFlights = [];


    searchFlights(searchCriteria) {
        this.spinnerService.show();
        console.log("getting flight details" + JSON.stringify(searchCriteria));
        this.flightDetailsService.getFliightDetails()
            .subscribe(data => this.flights = data); 
        
        this.selectedFlights = this.flights;
        
    }

    onValueChanged(e){
        let selectedEmployees: any[] = [];
      
        this.flights.forEach((item, index) => {
            if (item.ticketPrice >= e.value[0] && item.ticketPrice <= e.value[1]) {
                selectedEmployees.push(item);
            }
        });
      
        this.selectedFlights = selectedEmployees;
    }
}



