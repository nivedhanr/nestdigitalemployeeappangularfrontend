import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent {
  constructor(private api:ApiService,private route:Router){}
  empcode=""
  readValues:any=[]
  readValue=()=>{
    let data={"empcode":this.empcode}
    console.log(data)
    this.api.readValues(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid employee code")
          
        } else {
          this.readValues=response
          
        }
      }
    )
  }

  deleteBtnClick=(id:any)=>{
    let data:any={ "id":id}
    this.api.deleteemp(data).subscribe(
      (reponse:any)=>{
        console.log(reponse)
        if (reponse.status=="success") {
          alert("deleted successfully")
          this.readValues=[]
        }
         else {

          alert("Invalid input")
          
          
        }
      }
    )
  }
  
}
