import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'src/environments/environment'
import { Student, StudentWithoutId } from './types/student.type';

// POST http://localhost:3000/api/students/add HTTP/1.1
// Content-Type: application/json

// {
//     "name":"sabir",
//     "department":"DCS",
//     "program":"BSCS",
//     "semester":6
// }


@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  getStudentById(_id: string) {
    return this.http.get<Student[]>(this.apiUrl + `/api/students?id=${_id}`)
  }
  apiUrl = config.apiUrl
  constructor(private http: HttpClient) { }

  addStudent(stdObj: StudentWithoutId) {
    return this.http.post<Student>(this.apiUrl + '/api/students/add', stdObj)
  }

  getStudents(filter: string = '') {
    return this.http.get<Student[]>(this.apiUrl + '/api/students?name=' + filter)
  }

  updateStudent(stdObj: Student) {
    console.log(stdObj)
    return this.http.put<Student>(this.apiUrl + '/api/students/update', stdObj)
  }

  deleteStudent(id: string) {
    console.log(id)
    return this.http.delete(this.apiUrl + `/api/students/delete?id=${id}`)
  }
}
