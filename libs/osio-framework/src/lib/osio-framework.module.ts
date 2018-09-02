import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MainComponent } from './main/main.component';

export const osioFrameworkRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(osioFrameworkRoutes)],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class OsioFrameworkModule {}
