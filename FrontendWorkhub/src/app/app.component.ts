import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'FrontendWorkhub';
  message: any ;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://localhost:7181/api/Test').subscribe(
      (response) => {
        this.message = response;
      },
      (error) => {
        console.error('Error fetching message:', error);
      }
    );
  }
}
