import { Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit } from '@angular/core';
import { TemplateService, TemplateStruct } from '../osio-directive/template.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'osio-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  @ViewChild('body', {read: ViewContainerRef})
  bodyContainerRef: ViewContainerRef;

  constructor(
    private templateService: TemplateService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.templateService.templteRef.pipe(delay(200))
      .subscribe((template: TemplateStruct) => {
        this.bodyContainerRef.createEmbeddedView(template.template);
      })
  }

}
