import { EnginizerAngular2Page } from './app.po';

describe('enginizer-angular2 App', function() {
  let page: EnginizerAngular2Page;

  beforeEach(() => {
    page = new EnginizerAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
