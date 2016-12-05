import { Injectable } from '@angular/core';

@Injectable()
export class CalService {

  public result = "0";
  public expression = "?";

  constructor() { }

  addExpression(buttonVal) {
    this.expression += buttonVal;
  }
}
