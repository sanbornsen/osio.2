import { Directive, TemplateRef, AfterViewInit } from '@angular/core';
import { TemplateService } from './template.service';

@Directive({
  selector: '[osioBody]'
})
export class BodyDirective implements AfterViewInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private templateService: TemplateService
  ) { console.log('###-0'); }

  /**
   * Pushing the template to the service
   */
  ngAfterViewInit() {
    console.log('###-1');
    this.templateService.setBodyTemplate({
      template: this.templateRef,
      id: 0
    });
  }

}
