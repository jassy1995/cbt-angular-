import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { breakdown } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cbt',
  templateUrl: './cbt.component.html',
  styleUrls: ['./cbt.component.css']
})
export class CbtComponent implements OnInit {
  constructor(public service:MyserviceService,public router:Router) {
     
   }


  
  ngOnInit(): void {

  }
  
   
  }







  
  
  













