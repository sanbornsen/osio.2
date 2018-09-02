import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';
import { OsioDirectiveModule } from '@osio/osio-framework';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    OsioDirectiveModule
  ],
  declarations: [TestComponent],
  exports: [TestComponent]
})
export class TestModule { }
