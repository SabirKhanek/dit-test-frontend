import { ToastrService } from 'ngx-toastr';
import { Student, StudentWithoutId } from '../services/students/types/student.type';
import { StudentsService } from './../services/students/students.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class CreateOrUpdateStudentComponent implements OnInit {
  constructor(private stdService: StudentsService, private toastr: ToastrService, private router: Router, private route: ActivatedRoute) { }
  name = ''
  program = ''
  semester = 1
  department = ''
  _id = ''
  oldStudent: Student | undefined
  mode: 'edit' | 'new' = 'new'

  submit() {
    if (this.mode === 'new') {
      this.addStudent()
    } else {
      this.editStudent()
    }
  }

  addStudent() {
    if (this.name === '' || this.program === '' || !(this.semester >= 1 || this.semester <= 8) || this.department === '') {
      this.toastr.error('Kindly check your inputs. All the fields are required', 'Bad Request')
      return
    }
    const stdObj: StudentWithoutId = {
      name: this.name,
      program: this.program,
      semester: this.semester,
      department: this.department
    }
    this.stdService.addStudent(stdObj).subscribe({
      next: (res: Student) => {
        this.toastr.success(`Student: ${res.name} was added with Id: ${res._id}`)
        this.router.navigate(['/'])
      },
      error: (err: any) => {

        this.toastr.error(err, 'Error sending request to API')
      }
    })
  }

  editStudent() {
    const updatedObj = {
      _id: this._id,
      name: this.name,
      program: this.program,
      semester: this.semester,
      department: this.department
    }
    this.stdService.updateStudent(updatedObj).subscribe({
      next: (res: Student) => {
        console.log(res)
        this.toastr.success(`Student: ${this.oldStudent?.name} was updated successfully`)
        this.router.navigate(['/'])
      },
      error: (err: any) => {
        console.log(err)
        this.toastr.error(JSON.stringify(err), 'Error')
      }
    })
  }

  ngOnInit(): void {
    this._id = this.route.snapshot.params['id']
    if (this._id) {
      this.mode = 'edit'
      this.stdService.getStudentById(this._id).subscribe({
        next: (res: Student[]) => {
          const student = res[0]
          this.oldStudent = { ...student }
          this.name = student.name
          this.program = student.program
          this.semester = student.semester
          this.department = student.department
        },
        error: (err: any) => {
          console.log(err.error)
          this.toastr.error(JSON.stringify(err.error), 'Error fetching student. Switching to add student mode')
          this.router.navigate(['/new'])
        }
      })
    } else {
      this.router.navigate(['/new'])
    }
  }

}
