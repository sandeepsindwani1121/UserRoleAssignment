import { CreateuserComponent } from './createuser.component';
import { FormBuilder } from '@angular/forms';

describe('LoginComponent', () => {
	let fixture: CreateuserComponent;
	let authServiceMock: any;
	let formBuilderMock: FormBuilder;
	let routerMock: any;

	beforeEach(() => {
		authServiceMock = {
			create: jest.fn()
		};
		formBuilderMock = new FormBuilder();
		routerMock = jest.fn();
		fixture = new CreateuserComponent(
			formBuilderMock,
			authServiceMock,
			routerMock
		);
		fixture.ngOnInit();
	});

	describe('Test: Login Form', () => {
    it('should initialize loginForm', () => {
			const loginForm = {
				username: '',
				password: '',
				email:'',
				role:''
			};
			expect(fixture.userForm.value).toEqual(loginForm);
		});
		it('should invalidate the form', () => {
			fixture.userForm.controls.username.setValue('');
			fixture.userForm.controls.password.setValue('');
			expect(fixture.userForm.valid).toBeFalsy();
		});

    it('should not call loginUser', () => {
			const formData = {
				username: '',
				password: '',
				email:'',
				role:''
			};
			fixture.create(formData.username,formData.password,formData.email,formData.role);
            expect(authServiceMock.create).not.toHaveBeenCalled();
    });
    
      it('should call loginUser', () =>{
            
        const formData = {
			'email':'sandeep@gmail.com',
			'password': 'sandeep',
			'role':'admin',
			'username': 'sandeep'
        };
        
        const spyloginUser = jest.spyOn(authServiceMock, 'create').mockReturnValue(true);
        expect(authServiceMock.create(formData.username,formData.password,formData.email,formData.role )).toBe(true);
        expect(spyloginUser).toHaveBeenCalledWith(formData.username,formData.password,formData.email,formData.role );
      });
	});

});