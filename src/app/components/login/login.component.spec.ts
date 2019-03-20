import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';

import { LoginComponent } from './login.component';
import { UserLoginService } from '../user-login.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let userLoginService: any;
  let mockEvent = {
    preventDefault: () => {},
    target: {
      querySelector: (id) => {
        if (id === '#email') {
          return {value: 'test@gmail.com'};
        } else {
          return {value: 'password'};
        }
      }
    }
  };
  let mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };
  const mockResponse = {
    status: 'success',
    api_key: 'asdfkjl123ijio238',
    userId: '2'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      providers: [UserLoginService, {provide: Router, useValue: mockRouter}],
      declarations: [LoginComponent]
    })
    .compileComponents();
  }));

  beforeEach(inject([UserLoginService], s => {
    userLoginService = s;

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
  spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
  spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
  spyOn(localStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);

    spyOn(userLoginService, 'getUserLogin').and.returnValue(of(mockResponse));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not route navigate to dashboard', () => {
    mockRouter = {
      navigate: jasmine.createSpy('navigate')
    };
    component.ngOnInit();
    expect(mockRouter.navigate).not.toHaveBeenCalledWith(['/dashboard']);
  });

  it('should route navigate to dashboard when localStorage have api token', () => {
    localStorage.setItem('token', 'apitoken');
    component.ngOnInit();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
    localStorage.removeItem('token');
  });

  it('should call preventDefault function', () => {
    spyOn(mockEvent, 'preventDefault');
    component.loginUser(mockEvent);
    expect(mockEvent.preventDefault).toHaveBeenCalled();
  });

  xit('should route navigate to dashboard on login success', async(() => {
    component.loginUser(mockEvent);
    fixture.detectChanges();
    expect(component.loginSession).toBe(mockResponse);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  }));

  xit('should setItem for localStorage when remember is checked', async(() => {
    mockEvent = {
      preventDefault: () => {},
      target: {
        querySelector: (id) => {
          if (id === '#email') {
            return {value: 'test@gmail.com'};
          } else if (id === '#remember') {
            return {value: '', checked: true};
          } else {
            return {value: 'password'};
          }
        }
      }
    };

    component.loginUser(mockEvent);
    fixture.detectChanges();
    expect(localStorage.getItem('token')).toBe('asdfkjl123ijio238');
    expect(localStorage.getItem('userId')).toBe('2');
  }));
});
