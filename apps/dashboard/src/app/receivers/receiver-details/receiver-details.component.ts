import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Receiver } from '@receiver-angular/api-interfaces';

@Component({
  selector: 'receiver-angular-receiver-details',
  templateUrl: './receiver-details.component.html',
  styleUrls: ['./receiver-details.component.scss'],
})
export class ReceiverDetailsComponent {
  currentReceiver: Receiver;
  originalTitle = '';
  @Input() set receiver(value: Receiver) {
    if (value) this.originalTitle = value.title;
    this.currentReceiver = { ...value };
  }
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
}
