import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPasswordComponent } from './reset-password.component';

describe('ResetPasswordComponent', () => {
  let component: ResetPasswordComponent;
  let fixture: ComponentFixture<ResetPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send email', () => {
    const mockEvent = {
      preventDefault: () => {},
      target: {
        querySelector: () => {
          return {value: 'email@test.com'};
        }
      }
    };

    spyOn(mockEvent, 'preventDefault');
    component.resetPassword(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });
});
