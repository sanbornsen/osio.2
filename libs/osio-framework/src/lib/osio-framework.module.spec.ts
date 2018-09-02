import { async, TestBed } from '@angular/core/testing';
import { OsioFrameworkModule } from './osio-framework.module';

describe('OsioFrameworkModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OsioFrameworkModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OsioFrameworkModule).toBeDefined();
  });
});
