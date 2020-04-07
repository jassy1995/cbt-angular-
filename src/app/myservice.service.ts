import { Injectable } from '@angular/core';
import { detail } from './user'
import { HttpClient } from '@angular/common/http';

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
 record:detail = {firstName:"",lastName:"",phoneNo:"",department:"",email:""}
  constructor(private http:HttpClient) {  
  }
  minutes = 30;
  seconds = 60;
  score = 0;
   countDown(){
    this.seconds--;
    if(this.seconds === 0){
        this.minutes--;
        this.seconds=60;
    }
    if(this.minutes === 0){
     this.seconds = 0;
     this.minutes = 0;
    
    }
  }

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

  tet(value:any,source:String, index:number){
    if(source=='math'){
      this.math[index] = value;
      console.log(this.math)
    }
    if(source=='phy'){
      this.phy[index] = value;
      console.log(this.phy)
    }
    if(source=='chm'){
      this.chm[index] = value;
      console.log(this.chm)
    }
    if(source=='bio'){
      this.bio[index] = value;
      console.log(this.bio)
    }
    if(source=='gov'){
      this.gov[index] = value;
      console.log(this.gov)
    
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
          this.score +=1;
          this.pause()
     }
  }
  
    
   
      for(let i=0; i<this.phy.length; i++){
      if(this.phy[i]==this.answerP[i]){
        this.score+=1;
        this.pause()
       
       }
      }
      for(let i=0; i<this.bio.length; i++){
       if(this.bio[i]==this.answerB[i]){
        this.score +=1;
        this.pause()
       }
      }
      for(let i=0; i<this.gov.length; i++){
       if(this.gov[i]==this.answerG[i]){
        this.score+=1;
        this.pause()
       }
      }
      for(let i=0; i<this.chm.length; i++){
       if(this.chm[i]==this.answerC[i]){
        this.score +=1;
       this.pause()
       }
      
    }
 this.phy = this.emptyArr
 this.math = this.emptyArr
 this.chm = this.emptyArr
 this.bio = this.emptyArr
 this.gov  = this.emptyArr
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

  }

  






































































  

    