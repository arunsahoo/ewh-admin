import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
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
      access_token: 'asdfkjl123ijio238',
      user_id: '2'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [{provide: Router, useValue: mockRouter}],
      declarations: [LoginComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

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

  xit('should route navigate to dashboard on login success', (() => {
    const data = { response: true };
    const mockAxios = new MockAdapter(Axios);
    mockAxios.onPost('login').reply(200, data);

    component.loginUser(mockEvent);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  }));

  xit('should setItem for localStorage when remember is checked', (() => {
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

    const mockAxios = new MockAdapter(Axios);
    mockAxios.onPost('login').reply(200, mockResponse);

    component.loginUser(mockEvent);
    expect(localStorage.getItem('token')).toBe(mockResponse.access_token);
    expect(localStorage.getItem('userId')).toBe(mockResponse.user_id);
  }));
});
