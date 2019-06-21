import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PlaySpaceComponent } from './play-space/play-space.component';

@NgModule({
    declarations: [
        AppComponent,
        PlaySpaceComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
