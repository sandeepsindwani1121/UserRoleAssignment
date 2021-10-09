import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminComponent } from './admin.component';
describe('AdminComponent', () => {
  let mockAdminService:any;
  let fixture:AdminComponent;
   beforeEach(()=>{
    fixture=new AdminComponent();
    });
    it('should create', () => {
     expect(fixture).toBeTruthy();
   });
});
