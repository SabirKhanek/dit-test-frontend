import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrUpdateStudentComponent } from './add-student.component';

describe('AddStudentComponent', () => {
  let component: CreateOrUpdateStudentComponent;
  let fixture: ComponentFixture<CreateOrUpdateStudentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateOrUpdateStudentComponent]
    });
    fixture = TestBed.createComponent(CreateOrUpdateStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
