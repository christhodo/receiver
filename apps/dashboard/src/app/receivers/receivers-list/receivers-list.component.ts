import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Receiver } from '@receiver-angular/api-interfaces';

@Component({
  selector: 'receiver-angular-receivers-list',
  templateUrl: './receivers-list.component.html',
  styleUrls: ['./receivers-list.component.scss'],
})
export class ReceiversListComponent {
  @Input() receivers: Receiver[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
