import { Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { TemplateService } from '../../../../osio-framework/src/lib/osio-directive/template.service';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'osio-primary-navigation',
  templateUrl: './primary-navigation.component.html',
  styleUrls: ['./primary-navigation.component.css']
})
export class PrimaryNavigationComponent implements OnInit, AfterViewInit {

  @ViewChild('primaryNavigationContainer', { read: ViewContainerRef })
  navigationRef: ViewContainerRef;

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.templateService.menuItemTemplateRef
      .pipe(delay(100)).subscribe(t => {
      if (this.navigationRef) {
        if (!t) {
          this.navigationRef.clear();
        } else {
          this.navigationRef.createEmbeddedView(t.template);
        }
      }
    });
  }

}
