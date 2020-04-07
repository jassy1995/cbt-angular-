import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-gov',
  templateUrl: './gov.component.html',
  styleUrls: ['./gov.component.css']
})
export class GovComponent implements OnInit {

  constructor(public service:MyserviceService) { }

  ngOnInit(): void {
  }

}
