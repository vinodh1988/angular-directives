import { CgiPage } from './app.po';

describe('cgi App', () => {
  let page: CgiPage;

  beforeEach(() => {
    page = new CgiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
