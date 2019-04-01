import { HugojacquetPage } from './app.po';

describe('hugojacquet App', function() {
  let page: HugojacquetPage;

  beforeEach(() => {
    page = new HugojacquetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
