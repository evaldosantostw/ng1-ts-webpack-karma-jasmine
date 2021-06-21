function x(): string {
  return 'foo'
}
describe('example test', function() {
  it('should be true', function() {
    expect(x()).toBe('foo');
  });
});