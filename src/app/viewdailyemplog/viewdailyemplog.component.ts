import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewdailyemplog',
  templateUrl: './viewdailyemplog.component.html',
  styleUrls: ['./viewdailyemplog.component.css']
})
export class ViewdailyemplogComponent {
  constructor(private api:ApiService){
    api.viewEmployeeLog().subscribe(
      (response:any)=>
      {
        this.data=response
      }
    )
  }
  date=""
  searchData:any=[]
  readValues=()=>
  {
    let data:any={"date":this.date}
    console.log(data)
    this.api.viewDailyEmployeeLog(data).subscribe(
      (response:any)=>
      {
        console.log(response)
        if(response.length==0)
        {
          alert("Invalid")
        }
        else{
          this.data=[];
          this.searchData=response
        }
      }
    )

  }
  data:any=[]
}
