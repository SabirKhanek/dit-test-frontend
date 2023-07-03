import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { CreateOrUpdateStudentComponent } from './add-student/add-student.component';

const routes: Routes = [
  {
    path: 'new',
    component: CreateOrUpdateStudentComponent
  }, {
    path: 'edit/:id',
    component: CreateOrUpdateStudentComponent
  }, {
    path: '',
    component: StudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
