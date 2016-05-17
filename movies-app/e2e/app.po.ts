export class MoviesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('movies-app h1')).getText();
  }
}
