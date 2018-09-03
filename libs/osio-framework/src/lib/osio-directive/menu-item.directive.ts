import { Directive, AfterViewInit, TemplateRef, Input } from '@angular/core';
import { TemplateService } from './template.service';

@Directive({
  selector: '[osioMenuItem]'
})
export class MenuItemDirective implements AfterViewInit {

  @Input('osioMenuItem') osioMenuItem = 0;

  constructor(
    private templateRef: TemplateRef<any>,
    private templateService: TemplateService
  ) {}

  /**
   * Pushing the template to the service
   */
  ngAfterViewInit() {
    this.templateService.setMenuItemTemplate({
      template: this.templateRef,
      id: this.osioMenuItem
    });
  }

}
