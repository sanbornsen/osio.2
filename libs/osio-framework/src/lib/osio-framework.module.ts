import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OsioUiModule } from '../../../osio-ui/src';
import { OsioDirectiveModule } from './osio-directive/osio-directive.module';

export const osioFrameworkRoutes: Route[] = [];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(osioFrameworkRoutes),
    OsioUiModule,
    OsioDirectiveModule
  ],
  declarations: [MainComponent],
  exports: [MainComponent]
})
export class OsioFrameworkModule {}
