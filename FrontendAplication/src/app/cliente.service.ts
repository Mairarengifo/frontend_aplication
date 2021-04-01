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
    return this.http.get('https://lychee-shortcake-21209.herokuapp.com/api/clientes');
  }
  insert(data: Cliente){
    return this.http.post('https://lychee-shortcake-21209.herokuapp.com/api/clientes',data);
  }
  update(data: Cliente){
    return this.http.put('https://lychee-shortcake-21209.herokuapp.com/api/clientes/' + data.id, data);
  }
  delete(id){
    return this.http.delete('https://lychee-shortcake-21209.herokuapp.com/api/clientes/' + id);
  }
}
