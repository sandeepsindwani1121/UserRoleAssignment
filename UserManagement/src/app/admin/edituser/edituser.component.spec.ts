import { EdituserComponent } from './edituser.component';
import { FormBuilder } from '@angular/forms';
import { convertToParamMap } from '@angular/router';
import { of } from 'rxjs';


describe('EdituserComponent', () => {
	let fixture: EdituserComponent;
	let authServiceMock: any;
	let formBuilderMock: FormBuilder;
  let routerMock: any;
  let activatedRouteMock :any;
 
  beforeEach(() => {
    formBuilderMock = new FormBuilder();
    authServiceMock={
      update:jest.fn(),
      getById :jest.fn()
    }

    activatedRouteMock ={
      params: of(convertToParamMap({ id: '1' }))
    }
    routerMock = {
			navigate: jest.fn()
		},
    fixture=new EdituserComponent(formBuilderMock,routerMock,authServiceMock,activatedRouteMock);
    fixture.ngOnInit();

  });

  it('should get params', () => {
    expect(activatedRouteMock.params).toBeTruthy();
  });

  it('should not call getExpense', () => {
    const getByIdSpy = jest.spyOn(fixture, 'getById');
    expect(getByIdSpy).not.toHaveBeenCalled();
  });

  it('Invalidate the form', () => {
    fixture.userForm.controls.username.setValue('');
    fixture.userForm.controls.password.setValue('');
    fixture.userForm.controls.email.setValue('');
    fixture.userForm.controls.role.setValue('');
    expect(fixture.userForm.valid).toBeFalsy();
  });


  it('GetById Response', () => {
    const response={
      data:{}
    }
    const getByIdSpy = jest.spyOn(authServiceMock, 'getById').mockReturnValue(response);
    expect(authServiceMock.getById(1)).toBe(response);
    expect(getByIdSpy).toHaveBeenCalledWith(1);
  });


});

