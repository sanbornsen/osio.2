import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { OsioFrameworkModule, OsioDirectiveModule } from '@osio/osio-framework';
import { TestModule } from './test/test.module';
import { OsioUiModule } from '../../../../libs/osio-ui/src';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    TestModule,
    OsioDirectiveModule,
    OsioUiModule,
    OsioFrameworkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
