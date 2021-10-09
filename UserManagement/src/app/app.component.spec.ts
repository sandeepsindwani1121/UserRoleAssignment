
import { AppComponent } from './app.component';
describe('App Component',()=>{

  let fixture: AppComponent;
  beforeEach(()=>{
    fixture=new AppComponent();
  });

  it ('should be initialized', () => {
    expect(fixture.title).toEqual('User Management');
  });

});




