import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students/students.service';
import { Student } from '../services/students/types/student.type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  filter = ''
  students: Student[] = []
  studentHeader = [
    'name',
    'program',
    'semester',
    'department',
    'delete',
    'edit'
  ]


  constructor(private studentService: StudentsService, private toastr: ToastrService) {

  }

  remove(std: Student) {
    console.log(std)
    this.studentService.deleteStudent(std._id).subscribe({
      next: (res) => {
        console.log(res)
        this.toastr.success(`Student: ${std.name} deleted successfully`, 'Success')
        this.getStudents()
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {
    this.getStudents()
  }

  getPropFromObj(obj: any, prop: any) {
    return obj[prop]
  }

  getStudents() {
    this.studentService.getStudents(this.filter).subscribe({
      next: (res) => {
        this.students = res
      },
      error: (err) => {
        console.log('Error')
      }
    })
  }
}
