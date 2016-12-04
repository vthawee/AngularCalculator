import { Injectable } from '@angular/core';

@Injectable()
export class CalService {

  public result = "";
  public expression = "";

  constructor() { }

  addExpression(buttonVal) {
    this.expression += buttonVal;
  }
}
