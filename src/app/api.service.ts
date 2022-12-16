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
securityLogin=(datatosend: any)=>{
  
  return this.http.post("http://localhost:8080/securitylogin", datatosend)
}

getProfileDetails=(datatosend:any)=>{
  return this.http.post("http://localhost:8080/viewprofile",datatosend)
}
getsecurityProfileDetails=(datatosend:any)=>{
  return this.http.post("http://localhost:8080/viewsecurityprofile",datatosend)
}
applyLeave=(datatosend:any)=>{
  return this.http.post("http://localhost:8080/addleave",datatosend)
}
leaveStatus=(dataToSend:any)=>
{
  return this.http.post("http://localhost:8080/updatestatus",dataToSend)
}
viewLeave=()=>
{
  return this.http.get("http://localhost:8080/viewallleaves")
}
viewEmployeeLog=()=>
{
  return this.http.get("http://localhost:8080/viewAllEmployeeLog")
}
viewDailyEmployeeLog=(dataToSend:any)=>
{
  return this.http.post("http://localhost:8080/viewDailyEmployeeLog",dataToSend)
}
viewVisitorLog=()=>
{
  return this.http.get("http://localhost:8080/viewAllVisitorLog")
}
viewDailyVisitorLog=(dataToSend:any)=>
{
  return this.http.post("http://localhost:8080/viewDailyVisitorLog",dataToSend)
}
addEmployeeLog=(dataToSend:any)=>
{
  return this.http.post("http://localhost:8080/logEmployee",dataToSend)
}
viewEmployeeLog1=()=>
  {
    return this.http.get("http://localhost:8080/viewAllEmployeeLog")
  }
  viewDailyEmployeeLog1=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewDailyVisitorLog",dataToSend)
  }
  addVisitorLog=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/logVisitor",dataToSend)
  }
  viewVisitorLog1=()=>
  {
    return this.http.get("http://localhost:8080/viewAllVisitorLog")
  }
  viewDailyVisitorLog1=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/viewDailyVisitorLog",dataToSend)
  }
  updateStatus=(dataToSend:any)=>
  {
    return this.http.post("http://localhost:8080/updatestatus",dataToSend)
  }
}
