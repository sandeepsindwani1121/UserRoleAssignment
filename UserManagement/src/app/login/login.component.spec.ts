import { async } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let fixture: LoginComponent;
  let authServiceMock: any;
  let formBuilderMock: FormBuilder;
  let routerMock: any;

  beforeEach(async(() => {
    authServiceMock = {
      login: jest.fn(),
    };
    formBuilderMock = new FormBuilder();
    routerMock = jest.fn();
    fixture = new LoginComponent(formBuilderMock, authServiceMock, routerMock);
    fixture.ngOnInit();
  }));

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  it('login', () => {});
});
