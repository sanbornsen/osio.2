import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimaryNavigationComponent } from './primary-navigation/primary-navigation.component';
import { PrimaryNavigationItemComponent } from './primary-navigation-item/primary-navigation-item.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [PrimaryNavigationComponent, PrimaryNavigationItemComponent],
  exports: [PrimaryNavigationComponent, PrimaryNavigationItemComponent]
})
export class OsioUiModule {}
