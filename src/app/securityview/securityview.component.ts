import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-securityview',
  templateUrl: './securityview.component.html',
  styleUrls: ['./securityview.component.css']
})
export class SecurityviewComponent {
  constructor(private api:ApiService){
    api.viewEmployeeLog1().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}
