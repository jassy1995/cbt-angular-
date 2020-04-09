import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { HttpClient }  from '@angular/common/http';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  constructor( public service:MyserviceService) { }

  ngOnInit(): void {
  }

}
