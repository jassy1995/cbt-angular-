import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-cbt',
  templateUrl: './cbt.component.html',
  styleUrls: ['./cbt.component.css']
})
export class CbtComponent implements OnInit {
  constructor(public service:MyserviceService) {
     
   }

  
  ngOnInit(): void {

  }
}

  
  
  


