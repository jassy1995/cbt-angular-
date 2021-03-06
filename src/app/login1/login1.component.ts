import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import {  User1 } from '../user';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
 
  constructor(public service:MyserviceService, private fb:FormBuilder,public router:Router) { }
  invalide:String;
  regform=this.fb.group({
    email:['',[Validators.required,Validators.email]]
  })
  get email(){return this.regform.get('email')}
  ngOnInit(): void {
  
  }
  onSubmit(){
    if(this.regform.valid){
      const form:User1={
         email:this.email.value
      }
      this.service.studlog(form)
      .subscribe(res=>{
        if (res.success) {
          if(res.done){
            alert('Hello,you have done the exam already')
            this.service.checker = res.score;
            this.service.profile = res.message;
            this.router.navigate(["/done"])
          }else{
            this.service.profile = res.message;
            // console.log(this.service.profile)
          this.router.navigate(["/cbt"]) 

          }
        }
        else{
          this.invalide=res.message;          
          // console.log('invalid');
        }
      })

    }
  }



}
 