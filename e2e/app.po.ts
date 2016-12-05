import { browser, element, by } from 'protractor';

export class AngularCalculatorPage {

  private result;
  private expression;

  constructor() {
    this.result = element(by.className('result'));
    this.expression = element(by.className('expression'));
  }

  navigateTo() {
    return browser.get('/');
  }

  getResultText() {
    return this.result.getText();
  }

  getExpressionText() {
    return this.expression.getText();
  }

  getButtonByText(text) {
    return element(by.buttonText(text));
  }

  click(text) {
    this.getButtonByText(text).click();
    return this;
  }

  clickEqual() {
    this.click("=");
    return this;
  }

  clickAdd() {
    this.click("+");
    return this;
  }

  clickSubtract() {
    this.click("-");
    return this;
  }

  clickMulitply() {
    this.click("*");
    return this;
  }

  clickDivide() {
    this.click("/");
    return this;
  }
}
