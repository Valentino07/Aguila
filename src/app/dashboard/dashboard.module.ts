import { HomePage } from './pages/home/home';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'home', component: HomePage },
      { path: '**', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  declarations: [HomePage]
})
export class DashboardModule {}
