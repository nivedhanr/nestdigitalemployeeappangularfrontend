import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewvisitor',
  templateUrl: './viewvisitor.component.html',
  styleUrls: ['./viewvisitor.component.css']
})
export class ViewvisitorComponent {
  constructor(private api:ApiService){
    api.viewVisitorLog1().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
  data:any=[]
}
