import { Injectable } from '@angular/core';
import { Receiver } from '@receiver-angular/api-interfaces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'apps/dashboard/src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReceiversService {
  model = 'receivers';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get<Receiver[]>(this.getUrl());
  }

  find(id: string) {
    return this.http.get<Receiver>(this.getUrlWithId(id));
  }

  create(receiver: Receiver) {
    return this.http.post(this.getUrl(), receiver);
  }

  update(receiver: Receiver) {
    return this.http.put(this.getUrlWithId(receiver.id), receiver);
  }

  delete(receiver: Receiver) {
    return this.http.delete(this.getUrlWithId(receiver.id));
  }

  private getUrl() {
    return `${environment.apiEndpoint}${this.model}`;
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
