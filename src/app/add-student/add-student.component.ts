import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient) {

  }
  ngOnInit(): void { }

  public fbFormGroup = this.fb.group({
    first: ['', Validators.required],
    last: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    enrollment: ['', Validators.required],
  });

  async addStudent() {

    try {
      console.log('pressed')
      const data = this.fbFormGroup.value;
      console.log(data)
      const url = 'http://localhost:3200/api/students';

      let result = await this.http.post(url, data).toPromise();
      console.log(result)

    } catch (error) {

      console.log(error)
    }

  }


}
