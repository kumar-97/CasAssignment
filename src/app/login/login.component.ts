import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { CastlerService } from '../castler.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empId: any;
  apiData={};
  

  constructor(private fb:FormBuilder,
              private router :Router,
              private casService:CastlerService){}

  ngOnInit(): void {
  
  
  }
  verifyForm =this.fb.group({
    id:['',[Validators.required,Validators.maxLength(2)]]

  });
 
  // onSubmit() {
  //   this.empId= this.verifyForm.value.id;
  //   this.casService.getEmployee(this.empId).then(data =>{this.apiData=data;
  //      console.log(this.apiData);
  //      this.router.navigate(['profile'])
  //   } ).catch((error) => {
  //     console.log("Promise rejected with " + JSON.stringify(error));
  //     this.router.navigate(['notFound'])
  //   });
  //   console.warn(this.verifyForm.value.id);
  
  // }
  onSubmit() {
      this.empId= this.verifyForm.value.id;
      this.casService.getEmployee(this.empId)
      
    
    }

 
}
