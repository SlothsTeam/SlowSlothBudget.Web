import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];
    public values: string[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string, @Inject('API_BASE_URL') apiBaseUrl: Observable<any>) {
        http.get(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
            this.forecasts = result.json() as WeatherForecast[];
        }, error => console.error(error));
        apiBaseUrl.subscribe(result => {
            var apiUrl = result.json() as string;
            http.get(apiUrl + '/api/values').subscribe(result => {
                this.values = result.json() as string[];
            }, error => console.error(error));
        }, error => console.error(error));
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}
