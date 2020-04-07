import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup,FormControl} from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup3',
  templateUrl: './signup3.component.html',
  styleUrls: ['./signup3.component.css']
})
export class Signup3Component implements OnInit {

  constructor(private fb:FormBuilder, public service:MyserviceService,public router:Router) { }

  ngOnInit(): void {
    
  }
  regform=this.fb.group({
    firstName:['',[Validators.required]]
  })
  get firstName(){return this.regform.get('firstName')}
submit(){
//  console.log(this.regform.value.firstName)
 this.service.register({firstName:this.regform.value.firstName}).subscribe(
   res=>{
     console.log(res)
    // this.router.navigate(["/home"]) 
   },
   err=>{
    console.log(err)
   }
 )
}

}
