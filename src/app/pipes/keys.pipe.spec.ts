import { KeysPipe } from './keys.pipe';

describe('KeysPipe', () => {
  it('create an instance', () => {
    const pipe = new KeysPipe();
    expect(pipe).toBeTruthy();
  });
  it('should take an object and return its keys', () => {
    const pipe = new KeysPipe();
    expect(pipe.transform({ key1: 'val1', key2: 'val2' })).toBe(['key1', 'key2']);
  });
});
