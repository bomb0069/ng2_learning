import { Bomb0069Page } from './app.po';

describe('bomb0069 App', () => {
  let page: Bomb0069Page;

  beforeEach(() => {
    page = new Bomb0069Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
