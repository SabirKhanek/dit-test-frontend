import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentsService } from './services/students/students.service';
import { ToastrModule } from 'ngx-toastr';
import { CreateOrUpdateStudentComponent } from './add-student/add-student.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRouteSnapshot } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    NavbarComponent,
    CreateOrUpdateStudentComponent
  ],
  imports: [
    // BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
