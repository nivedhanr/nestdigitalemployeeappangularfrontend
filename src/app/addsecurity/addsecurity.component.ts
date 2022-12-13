import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addsecurity',
  templateUrl: './addsecurity.component.html',
  styleUrls: ['./addsecurity.component.css']
})
export class AddsecurityComponent {
  securitycode=""
  name=""
  address=""
  salary=""
  email=""
  phnno=""
  username=""
  password=""
  confirmpass=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"empcode":this.securitycode,"name":this.name,"address":this.address,"salary":this.salary,"email":this.email,"phn":this.phnno,"username":this.username,"password":this.password,"confirmpass":this.confirmpass}
    console.log(data)
    this.api.addsecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert(" added successfully")
          this.securitycode=""
          this.name=""
          this.address=""
          this.salary=""
          this.email=""
          this.phnno=""
          this.username=""
          this.password=""
          this.confirmpass=""
           
        }else{
          alert("Something went wrong")
        }
        }
    )
}
}
