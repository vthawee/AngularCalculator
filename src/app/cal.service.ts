import { Injectable } from '@angular/core';

@Injectable()
export class CalService {

  private result: string;
  private expressionChains: Array<string>;

  constructor() {
    this.expressionChains = new Array();
  }

  public getResult(): string {
    if (this.result == null) {
      return '0';
    } else {
      return this.result;
    }
  }

  public getExpression(): string {
    if (this.expressionChains.length === 0) {
      return '?';
    } else {
      return this.expressionChains.reduce((a, b) => a.concat(b), '');
    }
  }

  public addDigit(digit) {
    if (this.result && Number.parseFloat(this.result)) {
      this.result += digit;
    } else {
      this.result = digit;
    }
  }

  public addOperator(operator) {
    if (this.result) {
      // push current result and given operator
      this.expressionChains.push(this.result);
      this.expressionChains.push(operator);
      if ('=' === operator) {
        let calValue = this.calculateExpressionChains();
        this.expressionChains.push(calValue);
        this.result = calValue;
      } else {
        this.result = operator;
      }
    }
  }

  public executeCommand(command) {
    switch (command) {
      case 'AC':
        this.expressionChains = new Array();
        this.result = null;
        break;
      case 'CE':
        this.expressionChains.pop();
        this.result = null;
    }
  }

  private calculateExpressionChains(): string {
    let currentResult = Number.parseFloat(this.expressionChains[0]);

    for (let i = 1; i < this.expressionChains.length - 1; i += 2) {
      let operator = this.expressionChains[i];
      let nextDigit = Number.parseFloat(this.expressionChains[i + 1]);

      currentResult = this.calculate(currentResult, operator, nextDigit);
    }

    return currentResult.toString();
  }

  private calculate(current, operator, next): number {
    switch (operator) {
      case '+':
        return current + next;
      case '-':
        return current - next;
      case '*':
        return current * next;
      case '/':
        return current / next;
    }
  }
}
