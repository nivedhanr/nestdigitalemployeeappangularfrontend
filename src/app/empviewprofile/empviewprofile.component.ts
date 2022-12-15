import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-empviewprofile',
  templateUrl: './empviewprofile.component.html',
  styleUrls: ['./empviewprofile.component.css']
})
export class EmpviewprofileComponent {
  empcode:any=""
  constructor(private api:ApiService){
    this.empcode=localStorage.getItem("userinfo")
    let data:any={"id":this.empcode}
    this.api.getProfileDetails(data).subscribe(
      (response:any)=>{
        console.log(response)
        this.data=response

      }
    )
  }
  data:any=[]
}
