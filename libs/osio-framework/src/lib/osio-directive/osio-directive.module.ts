import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDirective } from './body.directive';
import { TemplateService } from './template.service';
import { MenuItemDirective } from './menu-item.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BodyDirective, MenuItemDirective],
  providers: [TemplateService],
  exports: [BodyDirective, MenuItemDirective]
})
export class OsioDirectiveModule { }
