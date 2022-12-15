import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityviewprofile',
  templateUrl: './securityviewprofile.component.html',
  styleUrls: ['./securityviewprofile.component.css']
})
export class SecurityviewprofileComponent {
  securitycode:any=""
  constructor(private api:ApiService){
    this.securitycode=localStorage.getItem("userinfo")
    let data:any={"id":this.securitycode}
    this.api.getsecurityProfileDetails(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response

      }
    )
  }
  data:any=[]
}
