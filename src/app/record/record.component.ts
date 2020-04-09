import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {

  constructor(public service:MyserviceService,public http:HttpClient) { }

  ngOnInit(): void {
  }

}
