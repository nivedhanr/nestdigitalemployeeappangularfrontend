import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securitylogin',
  templateUrl: './securitylogin.component.html',
  styleUrls: ['./securitylogin.component.css']
})
export class SecurityloginComponent {
  email=""
  password=""
  constructor(private api:ApiService,private route:Router){}
 
  readValues=()=>
  {
    let data:any={"email":this.email,"password":this.password}
    console.log(data)
    this.api.securityLogin(data).subscribe(
      (response:any)=>{
        this.email=""
        this.password=""
        if (response.length==0) {
          
          alert("Invalid credential")
        } else {
          let userId=response.userid
          console.log(userId)
          localStorage.setItem("userinfo",userId)
          //alert("Valid credential")
          this.route.navigate(['/securityviewprofile'])
          
        }
      }
    )

    

      
  }
}
