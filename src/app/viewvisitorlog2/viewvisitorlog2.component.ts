import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewvisitorlog2',
  templateUrl: './viewvisitorlog2.component.html',
  styleUrls: ['./viewvisitorlog2.component.css']
})
export class Viewvisitorlog2Component {
  name=""
  purpose=""
  whomToMeet=""
  date=""
  enterDateTime=""
  exitDateTime=""


  constructor(private api:ApiService){}


  readValues=()=>
  {

    let data:any={"name":this.name,"purpose":this.purpose,"whomToMeet":this.whomToMeet,date:this.date,"enterDateTime":this.enterDateTime,"exitDateTime":this.exitDateTime}
    console.log(data)
    
    this.api.addVisitorLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if (response.status=="success") {
          alert("Successfully added")
          this.name=""
          this.purpose=""
          this.whomToMeet=""
          this.enterDateTime=""
          this.exitDateTime=""
        } else {
          alert("Something went wrong")
        }
      }
    )
  }
}
