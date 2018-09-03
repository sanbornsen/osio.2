import { Injectable, TemplateRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';


export interface TemplateStruct {
  template: TemplateRef<any>;
  id: number;
}

const ids = [1, 2, 3];

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  public bodyTemplateRef: ReplaySubject<TemplateStruct> =
    new ReplaySubject<TemplateStruct>();
  public menuItemTemplateRef: ReplaySubject<TemplateStruct> =
    new ReplaySubject<TemplateStruct>();

  private menuTemplateStore: TemplateStruct[] = [];

  constructor() { }

  setBodyTemplate(template: TemplateStruct) {
    this.bodyTemplateRef.next(template);
  }

  setMenuItemTemplate(template: TemplateStruct) {
    this.menuTemplateStore = [...this.menuTemplateStore, template];
    this.menuItemTemplateRef.next(null);
    const sortedTemplates =
      this.menuTemplateStore
      .filter(i => ids.indexOf(i.id) > -1)
      .sort((x, y) => {
        return ids.indexOf(x.id) > ids.indexOf(y.id) ? 1 : 0;
      })
      .slice(
        this.menuTemplateStore.length > ids.length ?
          this.menuTemplateStore.length - ids.length : 0,
        this.menuTemplateStore.length
      );
    console.log(sortedTemplates);
    sortedTemplates.forEach(t => {
      this.menuItemTemplateRef.next(t);
    });
  }
}
