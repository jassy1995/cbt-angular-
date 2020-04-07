import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-phy',
  templateUrl: './phy.component.html',
  styleUrls: ['./phy.component.css']
})
export class PhyComponent implements OnInit {

  constructor( public service:MyserviceService) { }
  
  ngOnInit(): void {
  }
  

}
