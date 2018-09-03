import { async, TestBed } from '@angular/core/testing';
import { OsioUiModule } from './osio-ui.module';

describe('OsioUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OsioUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(OsioUiModule).toBeDefined();
  });
});
