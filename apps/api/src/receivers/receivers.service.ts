import { Receiver } from '@receiver-angular/api-interfaces';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ReceiversService {
  mockReceivers: Receiver[] = [
    {
      id: '1',
      title: 'Nest Receiver 01',
      description: 'This is a Nest receiver',
    },
    {
      id: '2',
      title: 'Nest Receiver 02',
      description: 'This is a Nest receiver',
    },
    {
      id: '3',
      title: 'Nest Receiver 03',
      description: 'This is a Nest receiver',
    },
  ];

  findAll() {
    return this.mockReceivers;
  }

  findOne(id: string) {
    return this.mockReceivers.find((receiver) => receiver.id === id);
  }

  create(receiver: Receiver) {
    this.mockReceivers = [
      ...this.mockReceivers,
      Object.assign({}, receiver, { id: uuidv4() }),
    ];
    return this.mockReceivers;
  }

  update(id: string, receiver: Receiver) {
    this.mockReceivers = this.mockReceivers.map((w) =>
      w.id === id ? receiver : w
    );
    return this.mockReceivers;
  }

  remove(id: string) {
    this.mockReceivers = this.mockReceivers.filter(
      (receiver) => receiver.id !== id
    );
    return this.mockReceivers;
  }
}
