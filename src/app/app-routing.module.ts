import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
// import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  // { path: 'Home', component: SearchComponent },
  // { path: 'Search', component: NavComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
