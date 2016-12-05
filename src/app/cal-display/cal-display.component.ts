import { Component, OnInit } from '@angular/core';
import { CalService} from '../cal.service';

@Component({
  selector: 'cal-display',
  templateUrl: './cal-display.component.html',
  styleUrls: ['./cal-display.component.css']
})
export class CalDisplayComponent implements OnInit {

  constructor(private calService: CalService) { }

  ngOnInit() {
  }

  getResult() {
    return this.calService.result;
  }

  getExpression() {
    return this.calService.expression;
  }
}
