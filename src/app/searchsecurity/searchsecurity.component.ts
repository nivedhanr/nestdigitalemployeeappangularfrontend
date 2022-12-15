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

  deleteBtn=(id:any)=>{
    let data:any={ "id":id}
    this.api.deletesecurity(data).subscribe(
      (reponse:any)=>{
        console.log(reponse)
        if (reponse.status=="success") {
          alert("deleted successfully")
          this.readValues=[]
        }else{
          alert("Invalid input")
        }
      }
    )
  }
}
