import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public first: string;
  public enroll: string;
  public last: string;
  public email: string;
  public password: string;
  public faEye = faEye;
  public faEyeSlash = faEyeSlash;
  public type: string = "password";
  public hideBtn:boolean = false;
  public showBtn:boolean = true;


  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getfaculty();
  }
  async getfaculty() {

    let token = sessionStorage.getItem('token');
    console.log("TOKEN:", token);

    const url = `http://localhost:3200/api/faculties/${token}`;
    console.log(url);
    const result: any = await this.http.get(url).toPromise();
    console.log("RESULT:", result);
    console.log("FIRST:", result[0].first);
    console.log("LAST:", result[0].last);
    console.log("EMP_ID:", result[0].employee_id);

    this.first = result[0].first.toUpperCase();
    this.last = result[0].last.toUpperCase();
    this.enroll = result[0].employee_id;
    this.password = result[0].password;
    this.email = result[0].email;


    console.log("FIRST:", this.first);
    console.log("LAST", this.last);
    console.log("ENROLL", this.enroll);

  }
  show() {

    this.hideBtn =true;
    this.showBtn =false;
    this.type = "text"

  }
  hide() {
 

    this.showBtn =true;
    this.hideBtn =false;
    this.type = "password";

  }
}
