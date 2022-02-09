import { browser, by, element, promise } from 'protractor';

export class AppHomePage  {

  navigateTo(){
      return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.xpath('/html/body/app-root/app-home/header/div/div/div[2]/h1')).getText() as Promise<string>;
  }
}
