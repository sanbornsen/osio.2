import { Injectable, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';


export interface TemplateStruct {
  template: TemplateRef<any>;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  public templteRef: ReplaySubject<TemplateStruct> =
    new ReplaySubject<TemplateStruct>();

  constructor() { }

  setBodyTemplate(template: TemplateStruct) {
    this.templteRef.next(template);
  }
}
