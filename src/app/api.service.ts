import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  addemployee=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/addemployee",datatosend)
  }
  addsecurity=(datatosend:any)=>
  {
    return this.http.post("http://localhost:8080/addsecurity",datatosend)
  }
  readValues=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/search",datatosend)
}
searchsecurity=(datatosend:any)=>
{
  return this.http.post("http://localhost:8080/searchsecurity",datatosend)
}
}
