import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';


import {FormsModule} from '@angular/forms';
import {AddEmployeeComponent} from './app.addemployement';




@NgModule({
    imports: [
        BrowserModule,FormsModule
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent
        
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }