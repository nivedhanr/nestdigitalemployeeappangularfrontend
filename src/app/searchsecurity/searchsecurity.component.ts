import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchsecurity',
  templateUrl: './searchsecurity.component.html',
  styleUrls: ['./searchsecurity.component.css']
})
export class SearchsecurityComponent {
  constructor(private api:ApiService){}
  securitycode=""
  readValues:any=[]
  readValue=()=>{
    let data={"securitycode":this.securitycode}
    console.log(data)
    this.api.searchsecurity(data).subscribe(
      (response:any)=>{
        console.log(response)
        if (response.length==0) {
          alert("invalid Security")
          
        } else {
          this.readValues=response
          
        }
      }
    )
  }
}
