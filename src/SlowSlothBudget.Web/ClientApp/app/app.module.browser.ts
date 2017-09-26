import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppModuleShared } from './app.module.shared';
import { AppComponent } from './components/app/app.component';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule,
        AppModuleShared
    ],
    providers: [
        { provide: 'BASE_URL', useFactory: getBaseUrl },
        { provide: 'API_BASE_URL', useFactory: getApiBaseUrl, deps: [Http, 'BASE_URL']}
    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}

export function getApiBaseUrl(http: Http, baseUrl: string) {
    return Observable.create((observer: any) => {
        http.get(baseUrl + 'api/DiscoveryServiceMock/ApiAddress').subscribe(result => {
            observer.next(result);
            observer.complete();
        })
    });
}
