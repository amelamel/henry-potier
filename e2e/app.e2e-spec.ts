import { HenryPotierPage } from './app.po';

describe('henry-potier App', () => {
  let page: HenryPotierPage;

  beforeEach(() => {
    page = new HenryPotierPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
