import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MainComponent } from './main/main.component';
import { OsioDirectiveModule } from './osio-directive/osio-directive.module';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { OsioUiModule } from '../../../osio-ui/src';

export const osioFrameworkRoutes: Route[] = [{
  path: '',
  component: DefaultHomeComponent
},
{
  path: '**',
  component: DefaultHomeComponent
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(osioFrameworkRoutes),
    OsioUiModule,
    OsioDirectiveModule
  ],
  declarations: [MainComponent, DefaultHomeComponent],
  exports: [MainComponent]
})
export class OsioFrameworkModule {}
