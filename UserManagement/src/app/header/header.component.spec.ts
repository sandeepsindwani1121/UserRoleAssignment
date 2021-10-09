import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
   let fixture:HeaderComponent;
   let authServiceMock:any;
  
  beforeEach(() => {
    authServiceMock:{
      isLoggedIn:jest.fn()
    }
    fixture=new HeaderComponent(authServiceMock);
    window.localStorage.setItem('currentUser','');
    fixture.ngOnInit();
  });

  it('should create', () => {
    expect(fixture).toBeTruthy();
  });
});
