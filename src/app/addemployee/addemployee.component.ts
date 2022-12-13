import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  empcode=""
  empname=""
  address=""
  salary=""
  email=""
  designation=""
  phnno=""
  username=""
  password=""
  confirmpass=""
  constructor(private api:ApiService){}

  readValues=()=>
  {
    let data:any={"empcode":this.empcode,"empname":this.empname,"address":this.address,"salary":this.salary,"email":this.email,"phnno":this.phnno,"designation":this.designation,"username":this.username,"password":this.password,"confirmpass":this.confirmpass}
    console.log(data)
    this.api.addemployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.status == "success") {
          alert(" added successfully")
          this.empcode=""
          this.empname=""
          this.address=""
          this.salary=""
          this.email=""
          this.phnno=""
          this.designation=""
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
