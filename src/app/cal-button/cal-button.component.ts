import { Component, OnInit, Input } from '@angular/core';
import { CalService } from '../cal.service';

@Component({
  selector: 'cal-button',
  templateUrl: './cal-button.component.html',
  styleUrls: ['./cal-button.component.css']
})
export class CalButtonComponent implements OnInit {

  @Input() buttonValue;
  @Input() buttonType;

  constructor(public calService: CalService) { }

  ngOnInit() {
  }

  public submitValue() {
    switch (this.buttonType) {
      case 'digit' :
        this.calService.addDigit(this.buttonValue);
        break;
      case 'operator' :
        this.calService.addOperator(this.buttonValue);
        break;
      case 'command' :
        this.calService.executeCommand(this.buttonValue);
    }
  }

}
