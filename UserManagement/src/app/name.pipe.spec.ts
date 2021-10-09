import { NamePipe } from './name.pipe';

describe('NamePipe', () => {
  let namepipe;
 beforeEach(()=>{
  namepipe=new NamePipe();
 });


  it('create an instance', () => {
    expect(namepipe).toBeTruthy();
  });


it('name transform',()=>{
expect(namepipe.transform('san')).toContain('Hello');
});

});
