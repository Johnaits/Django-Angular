import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, ObservableInput, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8000/';
  httpheaders = new HttpHeaders({
    'Content-Type': 'application/json',
    });
  constructor(private http: HttpClient) { }
  

  getMembers(id: string): Observable<any>{
    return this.http.get(this.baseurl + 'members/'+id+'/',
    {headers: this.httpheaders},);
    
  }

  updateMembers(member: any): Observable<any>{  
    let body = {name: member.name, surname: member.surname};
    console.log(body)
    return this.http.put(this.baseurl + 'members/'+ member.id +'/', body,
    {headers: this.httpheaders},);
  }
  
}


