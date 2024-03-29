import { Component } from '@angular/core';

@Component({
  selector: 'app-click-me2',
  template: `
    <button (click)="onClickMe2($event)">No! .. Click me!</button>
    {{clickMessage}}`
})
export class ClickMe2Component {
  clickMessage = '';
  clicks = 1;

  onClickMe2(event: any) {
    //let evtMsg = event ? ' Event target is ' + event.target.tagName : 'None';
    //What's the difference DOUBT
    let evtMsg = ' Event target is ' + event.target.tagName;
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg}`);
  }
}
