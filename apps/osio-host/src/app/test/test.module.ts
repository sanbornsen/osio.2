import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test/test.component';
import { OsioDirectiveModule } from '@osio/osio-framework';
import { TestNavComponent } from './test-nav/test-nav.component';
import { OsioUiModule } from '../../../../../libs/osio-ui/src';


@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    OsioDirectiveModule,
    OsioUiModule
  ],
  declarations: [TestComponent, TestNavComponent],
  exports: [TestComponent, TestNavComponent]
})
export class TestModule { }
