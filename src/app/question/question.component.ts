import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { tableData } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  constructor(public service:MyserviceService,public http:HttpClient, public router:Router) { }

  ngOnInit(): void {
  }
  viewProfile=()=>{
 this.service.recorded().subscribe(res=>{
   console.log(res);
    this.service.tabledetail = res.message;
    console.log(this.service.tabledetail);
    this.router.navigate(['studentprofile'])
 })

   
  }

}






// onSubmit(){
//   if(this.regform.valid){
//     const form:User1={
//        email:this.email.value
//     }
//     this.service.studlog(form)
//     .subscribe(res=>{
//       console.log(res)
//       if (res.success) {
//             this.service.profile = res.message;
//           this.router.navigate(["/cbt"]) 
//       }
//       else{
//         this.invalide=res.message;
//       }
//     },
//     )

    
//   }
//   console.log('invalid');
// }