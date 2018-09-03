import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryNavigationItemComponent } from './primary-navigation-item.component';

describe('PrimaryNavigationItemComponent', () => {
  let component: PrimaryNavigationItemComponent;
  let fixture: ComponentFixture<PrimaryNavigationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimaryNavigationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimaryNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
