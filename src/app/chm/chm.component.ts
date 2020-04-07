import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-chm',
  templateUrl: './chm.component.html',
  styleUrls: ['./chm.component.css']
})
export class ChmComponent implements OnInit {

  constructor(public service:MyserviceService) { }
  
  ngOnInit(): void {
  }

}
