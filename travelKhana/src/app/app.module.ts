import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { AppComponent } from './app.component';
import {MyDatePickerModule} from 'mydatepicker';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { FlightDetailsComponent } from './flight-search/flight-details/flight-details.component';
import { FetchFlightsService } from './common-services/fetch-flights.service';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxRangeSelectorModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightDetailsComponent
  ],
  imports: [
    Ng4LoadingSpinnerModule.forRoot(),
    BrowserModule,MyDatePickerModule,FormsModule,HttpModule,HttpClientModule,NgxPaginationModule,DxRangeSelectorModule
  ],
  providers: [FetchFlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);