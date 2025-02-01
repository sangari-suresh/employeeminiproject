import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AllemployeesService } from '../allemployees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  id: any=0;


  

  constructor(private _activatedRoute: ActivatedRoute,private _allemployeesService:AllemployeesService,private _router:Router){


    this.allemployeesForm.get('type')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='work from office'){
          this.allemployeesForm.addControl('travel fee',new FormControl());
          this.allemployeesForm.removeControl('wifi bill');
        }else{
          this.allemployeesForm.addControl('wifibill',new FormControl());
          this.allemployeesForm.removeControl('travel fee');
        }
      }
    )

  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id=data.id;

     this._allemployeesService.getallemployee(data.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.allemployeesForm.patchValue(data);
        }
      )
    })
  
  }


  public allemployeesForm:FormGroup=new FormGroup({
      name:new FormControl(),
      company:new FormControl(),
      role:new FormControl(),
      package:new FormControl(),
      email:new FormControl(),
      dob:new FormControl(),
      address:new FormGroup({
        addressline:new FormControl(),
        city:new FormControl(),
        state:new FormControl(),
        pincode:new FormControl(),
      }),

      type:new FormControl(),

      
   });

 
   submit(){
    if(this.id){
      this._allemployeesService.updateallemployees(this.id,this.allemployeesForm.value).subscribe(
       (data:any)=>{
         alert("Updated Successfully")
         this._router.navigateByUrl("dashboard/all-employees")
       },(err:any)=>{
         alert("Internal server Error")
       }
      
      )

    }else{
   this._allemployeesService.createallemployees(this.allemployeesForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("All Employees created successgfully")
      this._router.navigateByUrl("dashboard/all-employees")
    },(err:any)=>{
      alert("Internal server Error")
    }
   )
}
}

}
