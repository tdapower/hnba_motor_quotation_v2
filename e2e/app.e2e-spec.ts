import { MotorQuotationPage } from './app.po';

describe('motor-quotation App', function() {
  let page: MotorQuotationPage;

  beforeEach(() => {
    page = new MotorQuotationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
