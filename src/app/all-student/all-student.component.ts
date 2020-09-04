import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-all-student',
  templateUrl: './all-student.component.html',
  styleUrls: ['./all-student.component.css']
})
export class AllStudentComponent implements OnInit {

  public list: any = [];
  elements: any = [];

  constructor( private http: HttpClient ) { }

 async ngOnInit() {
   console.log('ON.int');
   this.getAllStudents();
   for (let i = 1; i <= 15; i++) {
    this.elements.push({ id: i, first: 'User ' + i, last: 'Name ' + i, handle: 'emalilii ' + i });
  }
  }


  async getAllStudents() {
    try {
      let url = "http://localhost:3200/api/students/allstudent";
      let result = await this.http.get(url).toPromise();
      this.list = result;
      console.log(this.list);
    } catch (error) {
       console.log(error)
    }

  }
}
