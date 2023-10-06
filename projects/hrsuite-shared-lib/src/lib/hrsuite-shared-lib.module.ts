import { NgModule } from '@angular/core';
import { HRSuiteSharedLibComponent } from './hrsuite-shared-lib.component';
import { StoreModule } from '@ngrx/store';
import { categoryReducer, moviesReducer } from '../public-api';



@NgModule({
  declarations: [
    HRSuiteSharedLibComponent
  ],
  imports: [
    StoreModule.forRoot(
      { movies: moviesReducer, categories: categoryReducer },
      {}
    )
  ],
  exports: [
    HRSuiteSharedLibComponent
  ]
})
export class HRSuiteSharedLibModule { }
