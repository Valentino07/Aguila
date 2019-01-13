
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { CountdownModule } from 'ngx-countdown';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [

  ],
  imports: [
    ReactiveFormsModule,
    //CountdownModule,
    HttpClientModule
  ],
  exports: [
    ReactiveFormsModule,
   // CountdownModule,
    HttpClientModule,
  ],
  providers: [
  ]
})
export class SharedModule {}
