import { Injectable } from '@angular/core';
import { detail, breakdown,tableData,done } from './user';
import { HttpClient } from '@angular/common/http';
import { CbtComponent } from './cbt/cbt.component';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
url="cbt"
answers;
value;
int;
sub;
arr;
collector:breakdown = {mathScore:"", phyScore:"",chmScore:"",bioScore:"",govScore:"",totalScore:"",candidateId:""}
profile:detail = {firstName:"",lastName:"",phoneNo:"",department:"",email:"",studentId:""}
checker:done = {firstName:"",lastName:"",mathScore:"",phyScore:"",chmScore:"",bioScore:"",govScore:"",totalScore:""}
tabledetail:tableData[] = [{firstName:"",lastName:"",phoneNo:"",department:"",totalScore:"", candidateId:""}];
  constructor(private http:HttpClient, public router:Router) { }
  minutes = 30;
  seconds = 60;
  score = 0;
  mathScore = 0 ;
  phyScore = 0;
  chmScore = 0;
  bioScore = 0;
  govScore = 0;
  datas;
  firstName;
  lastName;
  phoneNo;
  department;
  totalScore;
  candidateId;
   countDown(){
    this.seconds--;
    if(this.seconds === 0){
        this.minutes--;
        this.seconds=60;
    }
    if(this.minutes === 0){
     this.seconds = 0;
    this.minutes=0;
      alert('your time is up') 
      this.router.navigate(["/record"])
    }
  }


  /** The collections of sign up abd login methods for both students and admins are below */
  register(data){
    return this.http.post<any>(`${this.url}/student1.php`,data)
  }
  admiLog(data){
    return this.http.post<any>(`${this.url}/adminLogin.php`,data)
  }
  register1(data){
    return this.http.post<any>(`${this.url}/admin1.php`,data)
  }
  studlog(data){
    return this.http.post<any>(`${this.url}/student_login.php`,data)
  }
  saveScore(data){
    return this.http.post<any>(`${this.url}/saveRecord1.php`,data)
    .subscribe(data=> console.log(data));
  }
  retrieveScore(data){
    return this.http.post<any>(`${this.url}/retrieveRecord1.php`,data)
  }
  recorded(){
    return this.http.get<any>(`${this.url}/record1.php`)
  }


  /* Ends here */

  tet(value:any,source:String, index:number){
    if(source=='math'){
      this.math[index] = value;
      // console.log(this.math)
    }
    if(source=='phy'){
      this.phy[index] = value;
      // console.log(this.phy)
    }
    if(source=='chm'){
      this.chm[index] = value;
      // console.log(this.chm)
    }
    if(source=='bio'){
      this.bio[index] = value;
      // console.log(this.bio)
    }
    if(source=='gov'){
      this.gov[index] = value;
      // console.log(this.gov)
    
    }
      
  }
  


  math:any[] =['','','','',''];
  phy: any[] =['','','','',''];
  chm: any[] =['','','','',''];
  bio: any[] =['','','','',''];
  gov: any[] =['','','','',''];

  answerM = ['4','19/10','0','12','16' ];
  answerB = ["Abraham lincoln","kwashiokor", "herbivorus","stomata","cell"]
  answerC =["parafin", "sucrose", "separating funnel", "suspension", " acid"]
  answerG = ["2006", "Seyi Makinde", "oct 1st 1960", "executive", "3"]
  answerP = ["newton", "battery", " meter", "fundamental interval", "3"]
  emptyArr = ['','','','',''];

  start=()=>{
    this.int = setInterval(()=>{this.countDown()}, 100);
  }
  
  
 
  onsubmit=()=>{
    this.score=0;
    for(let i=0; i<this.math.length; i++){
      if(this.math[i] == this.answerM[i]) {
          this.mathScore +=1;
          this.pause()
     }
  }
  
    
   
      for(let i=0; i<this.phy.length; i++){
      if(this.phy[i]==this.answerP[i]){
        this.phyScore+=1;
        this.pause()
       
       }
      }
      for(let i=0; i<this.bio.length; i++){
       if(this.bio[i]==this.answerB[i]){
        this.bioScore +=1;
        this.pause()
       }
      }
      for(let i=0; i<this.gov.length; i++){
       if(this.gov[i]==this.answerG[i]){
        this.govScore+=1;
        this.pause()
       }
      }
      for(let i=0; i<this.chm.length; i++){
       if(this.chm[i]==this.answerC[i]){
        this.chmScore +=1;
       this.pause()
       }
      
    }
 this.phy = this.emptyArr
 this.math = this.emptyArr
 this.chm = this.emptyArr
 this.bio = this.emptyArr
 this.gov  = this.emptyArr
 this.score = this.mathScore + this.phyScore + this.bioScore + this.govScore + this.chmScore;
 this.saved(); 
 this.con();
  }
  pause=()=>{
    clearInterval(this.int);
    this.seconds=0;
    this.minutes=0;
   }
   con=()=>{
     this.arr=confirm('Are you sure you want to submit')
   }
   saved=()=>{
     const form = {mathScore:this.mathScore,phyScore:this.phyScore,
     chmScore:this.chmScore,bioScore:this.bioScore,govScore:this.govScore,totalScore:this.score, 
     candidateId:this.profile.studentId}
     this.saveScore(form);
    //  console.log(form)
      
    }
  }
    

































































  

    