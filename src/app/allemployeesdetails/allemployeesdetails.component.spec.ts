import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllemployeesdetailsComponent } from './allemployeesdetails.component';

describe('AllemployeesdetailsComponent', () => {
  let component: AllemployeesdetailsComponent;
  let fixture: ComponentFixture<AllemployeesdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllemployeesdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllemployeesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
