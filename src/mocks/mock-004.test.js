
describe('Mock return Values', () => {
  it('expects the original value to be used', () => {
    const testMock = jest.fn();
    
    const result = testMock();
    expect(result).toEqual(undefined);
  });

  it('expects the injected value to be used', () => {
    const testMock = jest.fn();
    testMock
      .mockReturnValueOnce(10)
      .mockReturnValueOnce('x')
      .mockReturnValue(true);

    const result1 = testMock();
    expect(result1).toEqual(10);

    const result2 = testMock();
    expect(result2).toEqual('x');

    const result3 = testMock();
    expect(result3).toEqual(true);

    const result4 = testMock();
    expect(result4).toEqual(true);
  });
});
