import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { ProfilePictureComponent } from './profile-picture.component';
import { UserLoginService } from '../../services/user-login.service';

describe('ProfilePictureComponent', () => {
  let component: ProfilePictureComponent;
  let fixture: ComponentFixture<ProfilePictureComponent>;
  const mockResponse = {
    data: [],
    status: 'success'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserLoginService],
      declarations: [ ProfilePictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
