import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDataListComponent } from './employee-data-list.component';

describe('EmployeeDataListComponent', () => {
  let component: EmployeeDataListComponent;
  let fixture: ComponentFixture<EmployeeDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeDataListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
