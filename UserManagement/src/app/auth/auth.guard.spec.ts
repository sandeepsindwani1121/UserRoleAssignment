// import { TestBed } from '@angular/core/testing';
// import {LoginService} from '../service/login.service';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthGuard } from './auth.guard';
// import {Login} from '../login';

// class MockActivatedRouteSnapshot {
//   private _data: any;
//   get data() {
//       return this._data;
//   }
// }

// class MockRouterStateSnapshot {
//   url: string = '/';
// }

// class MockAuthService {

//   get isLoggedIn() {
//       return true;
//   }
//   get isLoggedOut() {
//     return false;
//   }
// }

// const adminUser: Login = {
//   id: 1,
//   username: 'sandeep',
//   password: 'sandeep',
//   email: 'sandeep@gmail.com',
//   role: 'admin'
// };

describe('AuthGuard Test', () => {
  let service: AuthGuard;
  let authServiceMock: any;
  let routerMock: any;

  beforeEach(() => {
    //   TestBed.configureTestingModule({
    //     providers: [AuthGuard,
    //         { provide: Router, useClass: MockRouter },
    //         { provide: ActivatedRouteSnapshot, useClass: MockActivatedRouteSnapshot },
    //         { provide: LoginService, useClass: MockAuthService },
    //         { provide: RouterStateSnapshot, useClass: MockRouterStateSnapshot }
    //     ]
    // });

    // router = TestBed.get(Router);
    // spyOn(router, 'navigate');
    // authService = TestBed.get(LoginService);
    // authService.isLoggedIn();
    // authGuard = TestBed.get(AuthGuard);
    // state = TestBed.get(RouterStateSnapshot);

    authServiceMock = {
      isLoggedIn: jest.fn(),
    };
    routerMock = {
      navigate: jest.fn(),
    };

    service = new AuthGuard(authServiceMock, routerMock);
  });
  describe('Test: canActivate', () => {
    it('should return true', () => {
      const spycanActivate = jest
        .spyOn(service, 'checklogin')
        .mockReturnValue(true);
      expect(service.checklogin('/')).toBe(true);
    });

    it('should return false', () => {
      const spycanActivate = jest
        .spyOn(service, 'checklogin')
        .mockReturnValue(false);
      expect(service.checklogin('/')).toBe(false);
    });
  });
  // it('should be created', () => {
  //   //expect(authGuard.canActivate(route, state)).toEqual(true);
  //   expect(authGuard.canActivate(route, state)).toEqual(true);

  //   //expect(authService.isLoggedIn()).toEqual(true);
  // });
});
