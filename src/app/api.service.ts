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
deleteemp=(datatosend:any)=>{
  return this.http.post("http://localhost:8080/delete",datatosend)
}
deletesecurity=(datatosend:any)=>{
  return this.http.post("http://localhost:8080/deletesecurity",datatosend)
}
viewallemp=()=>{
  return this.http.get("http://localhost:8080/viewemp")
}
viewallsecurity=()=>{
  return this.http.get("http://localhost:8080/viewsecurity")
}
userLogin=(datatosend: any)=>{
  
  return this.http.post("http://localhost:8080/userlogin", datatosend)
}

}
