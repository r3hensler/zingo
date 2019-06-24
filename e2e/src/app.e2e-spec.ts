import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('Zingo App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome and info message for card 1', () => {
        page.navigateTo();
        expect(page.getTitleText()).toEqual('Welcome to Zingo!');
        expect(page.getGridTitleText()).toEqual('You are playing with Sheet 1');
    });

    afterEach(async () => {
        // Assert that there are no errors emitted from the browser
        const logs = await browser.manage().logs().get(logging.Type.BROWSER);
        expect(logs).not.toContain(jasmine.objectContaining({
            level: logging.Level.SEVERE,
        } as logging.Entry));
    });
});
