import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Testes da página inicial', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('deve exibir uma mensagem na pagina inicial', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Desenvolvimento Avançado em Angular');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
