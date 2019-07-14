import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchService } from './search.service';
import { NavComponent } from './nav/nav.component';
import { DesigningComponent } from './designing/designing.component';


const routes: Routes = [

];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    NavComponent,
    DesigningComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule

  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
