import { Component } from '@angular/core';
import { AllemployeesService } from '../allemployees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {
allemployees:any=[];
all: any;
employees: any;
hikes: any;

constructor(private _allemployeesService:AllemployeesService){
  this.pageload();
}

pageload(){
  this._allemployeesService.getallemployees().subscribe(
    (data:any)=>{
      this.allemployees=data;
      console.log(this.allemployees);
    }
  )
}

term:string="";
filter(){
  this._allemployeesService.getFilteredallemployees(this.term).subscribe(
    (data:any)=>{
      this.allemployees=data;
      console.log(this.allemployees);
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}

column:string="";
order:string="";
sort(){
  this._allemployeesService.getSortedallemployees(this.column,this.order).subscribe(
    (data:any)=>{
      this.allemployees=data;
      console.log("this.allemployees");
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}

limit:number=0;
page:number=0;
paginated(){
  this._allemployeesService.getPaginatedallemployees(this.limit,this.page).subscribe(
    (data:any)=>{
      this.allemployees=data;
      console.log(this.allemployees);
    }
  )
}

delete(id:number){
  if(confirm("Are are sure you want to delete?")==true){
  this._allemployeesService.deleteallemployees(id).subscribe(
    (data:any)=>{
      alert("Record Deleted Successfully")
      this.pageload();
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}else{
  alert("You have Cancelled!")
}
}

// hike(){
//   this.allemployees=this.allemployees.map((allemployees:any)=>{
//     allemployees.package=allemployees.package+100000;
//     return allemployees
//   }
//   )
// }

}
