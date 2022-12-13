import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent {
  constructor(private api:ApiService){}
  empcode=""
  readValues:any=[]
  readValue=()=>{
    let data={"empcode":this.empcode}
    console.log(data)
    this.api.readValues(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid course")
          
        } else {
          this.readValues=response
          
        }
      }
    )
  }
  
}
