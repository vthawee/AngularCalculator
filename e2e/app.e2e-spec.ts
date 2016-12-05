import { AngularCalculatorPage } from './app.po';

describe('angular-calculator App', function() {
  let page: AngularCalculatorPage;

  beforeEach(() => {
    page = new AngularCalculatorPage();
    page.navigateTo();
  });

  it('should display default texts', () => {
    expect(page.getResultText()).toEqual('0');
    expect(page.getExpressionText()).toEqual('?');
  });

  it('should display 10 digit buttons', () => {
    page.getButtonByText('1').isDisplayed();
    page.getButtonByText('2').isDisplayed();
    page.getButtonByText('3').isDisplayed();
    page.getButtonByText('4').isDisplayed();
    page.getButtonByText('5').isDisplayed();
    page.getButtonByText('6').isDisplayed();
    page.getButtonByText('7').isDisplayed();
    page.getButtonByText('8').isDisplayed();
    page.getButtonByText('9').isDisplayed();
    page.getButtonByText('0').isDisplayed();
  });
  
  it('should display 6 operator buttons', () => {
    page.getButtonByText('+').isDisplayed();
    page.getButtonByText('-').isDisplayed();
    page.getButtonByText('*').isDisplayed();
    page.getButtonByText('/').isDisplayed();
    page.getButtonByText('=').isDisplayed();
    page.getButtonByText('.').isDisplayed();
  });

  it('should display 2 command buttons', () => {
    page.getButtonByText('AC').isDisplayed();
    page.getButtonByText('CE').isDisplayed();
  });
});
