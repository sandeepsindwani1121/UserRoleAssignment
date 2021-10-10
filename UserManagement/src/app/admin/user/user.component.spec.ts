import { Login } from 'src/app/login';
import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let authServiceMock: any;
  let routerMock: any;
  let fixture: UserComponent;
  beforeEach(async () => {
    (routerMock = {
      navigate: jest.fn(),
    }),
      (authServiceMock = {
        getAll(): Login[] {
          return [
            {
              id: 1,
              username: 'sandeep',
              password: 'sandeep',
              email: 'sandeep@gmail.com',
              role: 'admin',
            },
            {
              id: 1,
              username: 'vikas',
              password: 'vikas',
              email: 'vikas@gmail.com',
              role: 'user',
            },
            {
              id: 1,
              username: 'sanjay',
              password: 'sanjay',
              email: 'sanjay@gmail.com',
              role: 'user',
            },
          ];
        },
      });
    fixture = new UserComponent(authServiceMock, routerMock);
    // fixture.detectChanges();
    // fixture.ngOnInit();
  });

  it('should not call getAll', () => {
    const getAllSpy = jest.spyOn(fixture, 'getAll');
    expect(getAllSpy).not.toHaveBeenCalled();
  });

  it('should call', () => {
    expect(authServiceMock.getAll()).toHaveLength(3);
  });
});
