import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { tableData } from '../user'

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  constructor(public service:MyserviceService,public http:HttpClient) { }

  ngOnInit(): void {
  }

  list = this.service.tabledetail;

  delete(index){
    this.list.splice(index,1);
  }

}


