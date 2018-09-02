import { OsioDirectiveModule } from './osio-directive.module';

describe('OsioDirectiveModule', () => {
  let osioDirectiveModule: OsioDirectiveModule;

  beforeEach(() => {
    osioDirectiveModule = new OsioDirectiveModule();
  });

  it('should create an instance', () => {
    expect(osioDirectiveModule).toBeTruthy();
  });
});
