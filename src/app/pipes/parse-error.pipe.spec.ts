import { ParseErrorPipe } from './parse-error.pipe';

describe('KeysPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseErrorPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return only "required" if required exists on the object', () => {
    const pipe = new ParseErrorPipe();
    expect(pipe.transform({ pattern: 'val1', required: 'val2', email: 'val3' }))
    .toBe('Required');
  });
  it('should otherwise return "Invalid email address" if email was present', () => {
    const pipe = new ParseErrorPipe();
    expect(pipe.transform({ pattern: 'val1', email: 'val3' }))
      .toBe('Invalid email address');
  });
  it('should return "Please enter your real name" if the only value was pattern', () => {
    const pipe = new ParseErrorPipe();
    expect(pipe.transform({ pattern: 'val1' }))
      .toBe('Please enter your real name');
  });
});
