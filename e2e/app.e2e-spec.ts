import { NewclicliPage } from './app.po';

describe('newclicli App', () => {
  let page: NewclicliPage;

  beforeEach(() => {
    page = new NewclicliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
