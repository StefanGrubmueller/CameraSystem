import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CameraSystem';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
  }
  postTest() {

    this.http.post('/', {test: 'test'}).subscribe();
  }


}
