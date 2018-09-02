import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyDirective } from './body.directive';
import { TemplateService } from './template.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BodyDirective],
  providers: [TemplateService],
  exports: [BodyDirective]
})
export class OsioDirectiveModule { }
