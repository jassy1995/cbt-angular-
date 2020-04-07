import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { User } from '../user';
import { FormBuilder,Validators,FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup2',
  templateUrl: './signup2.component.html',
  styleUrls: ['./signup2.component.css']
})
export class Signup2Component implements OnInit {
 
  constructor( public service:MyserviceService,private fb:FormBuilder, public router : Router) { }
  regform=this.fb.group({
    firstName:['',[Validators.required]],
    lastName:['',[Validators.required]],
    phoneNo:['',[Validators.required]],
    department:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]]

  })
  get firstName(){return this.regform.get('firstName')}
  get lastName(){return this.regform.get('lastName')}
  get phoneNo(){return this.regform.get('phoneNo')}
  get department(){return this.regform.get('department')}
  get email(){return this.regform.get('email')}
  ngOnInit(): void {

  }
  onSubmit(){
    if(this.regform.valid){
      const form:User ={
        firstName:this.firstName.value,
        lastName:this.lastName.value,
         phoneNo:this.phoneNo.value,
         department:this.department.value,
         email:this.email.value
    
}
this.service.register1(form).subscribe(
  res=>{this.router.navigate(["administration/login2"])},
  err=>console.log(err)
)
console.log(form);
return;

}
console.log('invalid');
  }
}
