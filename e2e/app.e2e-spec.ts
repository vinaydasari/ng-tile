import { NgTilePage } from './app.po';

describe('ng-tile App', () => {
  let page: NgTilePage;

  beforeEach(() => {
    page = new NgTilePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
