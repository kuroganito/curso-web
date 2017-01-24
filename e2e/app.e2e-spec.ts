import { CursoWebPage } from './app.po';

describe('curso-web App', function() {
  let page: CursoWebPage;

  beforeEach(() => {
    page = new CursoWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
