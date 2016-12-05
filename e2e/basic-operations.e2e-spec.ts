import { AngularCalculatorPage } from './app.po';

describe('angular-calculator basic operations', function() {
  let page: AngularCalculatorPage;

  beforeEach(() => {
    page = new AngularCalculatorPage();
    page.navigateTo();
  });

  it('should do add operation', () => {
    page.click('1')
        .clickAdd()
        .click('2')
        .clickEqual();
    expect(page.getResultText()).toEqual('3');
    expect(page.getExpressionText()).toEqual('1+2=3');
  });

  it('should do subtract operation', () => {
    page.click('9')
        .clickSubtract()
        .click('4')
        .clickEqual();
    expect(page.getResultText()).toEqual('5');
    expect(page.getExpressionText()).toEqual('9-4=5');
  });

  it('should do multiply operation', () => {
    page.click('6')
        .clickMulitply()
        .click('7')
        .clickEqual();
    expect(page.getResultText()).toEqual('42');
    expect(page.getExpressionText()).toEqual('6*7=42');
  });

  it('should do divide operation', () => {
    page.click('8')
        .click('4')
        .clickDivide()
        .click('1')
        .click('2')
        .clickEqual();
    expect(page.getResultText()).toEqual('7');
    expect(page.getExpressionText()).toEqual('84/12=7');
  });
  
});