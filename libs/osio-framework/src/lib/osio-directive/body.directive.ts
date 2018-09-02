import { Directive, TemplateRef, AfterViewInit } from '@angular/core';
import { TemplateService } from './template.service';

@Directive({
  selector: '[osioBody]'
})
export class BodyDirective implements AfterViewInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private templateService: TemplateService
  ) {}

  /**
   * Pushing the template to the service
   */
  ngAfterViewInit() {
    this.templateService.setBodyTemplate({
      template: this.templateRef,
      id: 0
    });
  }

}
