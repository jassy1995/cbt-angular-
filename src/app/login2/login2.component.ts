import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { User, User1  } from '../user';
import { FormBuilder,Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  constructor(public service:MyserviceService, private fb:FormBuilder,public router:Router) { }
 invalide:String;
  regform=this.fb.group({
    email:['',[Validators.required, Validators.email]]

  })
  get email(){return this.regform.get('email')}
  ngOnInit(): void {
  }
      onSubmit(){
        if(this.regform.valid){
          const form:User1={
             email:this.email.value
          }
          this.service.admiLog(form).subscribe(
            res=>{
              console.log(res)
              if (res=="success") {
                 this.router.navigate(["/question"]) 
              }
              else{
                this.invalide=res;
              }
          },
          )
          console.log(form);
          return;
          
        }
        console.log('invalid');
      }


  
}

 
