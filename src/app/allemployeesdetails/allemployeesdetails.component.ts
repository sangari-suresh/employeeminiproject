import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllemployeesService } from '../allemployees.service';

@Component({
  selector: 'app-allemployeesdetails',
  templateUrl: './allemployeesdetails.component.html',
  styleUrls: ['./allemployeesdetails.component.css']
})
export class AllemployeesdetailsComponent {

  allemployees:any=[];
  constructor( private _activateddRoute:ActivatedRoute,private _allemployeesService:AllemployeesService){
    _activateddRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this._allemployeesService.getallemployee(data.id).subscribe(
          (data:any)=>{
            this.allemployees=data;
            console.log("data.",data);
          }
        )
      }
    )
    
  }
}
