import { ParseErrorPipe } from './parse-error.pipe';

describe('KeysPipe', () => {
  it('create an instance', () => {
    const pipe = new ParseErrorPipe();
    expect(pipe).toBeTruthy();
  });
  it('should take an object and return its keys', () => {
    const pipe = new ParseErrorPipe();
    expect(pipe.transform({ key1: 'val1', key2: 'val2' })).toBe(['key1', 'key2']);
  });
});
