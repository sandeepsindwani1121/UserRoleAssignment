import { UserComponent } from './user.component';
import { of, Observable } from 'rxjs';
import { Login } from 'src/app/login';


describe('UserComponent', () => {
	let authServiceMock: any;
let routerMock:any;
let fixture:UserComponent;
beforeEach(async ()=>{
  routerMock = {
    navigate: jest.fn()
  },
  authServiceMock={
    getAll(){
   return [
     {id:1,username:'sandeep',password:'sandeep',email:'sandeep@gmail.com',role:'admin'},
     {id:1,username:'vikas',password:'vikas',email:'vikas@gmail.com',role:'user'},
     {id:1,username:'sanjay',password:'sanjay',email:'sanjay@gmail.com',role:'user'}
  ]
  }
}
  fixture = new UserComponent(authServiceMock,routerMock);
  //fixture.detectChanges();
  //fixture.ngOnInit();
  
 });


 it('should not call getAll', () => {
  const getAllSpy = jest.spyOn(fixture, 'getAll');
  expect(getAllSpy).not.toHaveBeenCalled();
});


  it('should call', () => {
      const response={
        data:{}
      }
    expect(authServiceMock.getAll()).toHaveLength(3);
  });
});
