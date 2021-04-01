import { Injectable } from '@angular/core';
import {Cliente} from './cliente';
import {Http}from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  data: Cliente[];

  constructor(private http: Http) { }
  read(){
    return this.http.get('/api/clientes');
  }
  insert(data: Cliente){
    return this.http.post('/api/clientes',data);
  }
  update(data: Cliente){
    return this.http.put('/api/clientes/' + data.id, data);
  }
  delete(id){
    return this.http.delete('/api/clientes/' + id);
  }
}
