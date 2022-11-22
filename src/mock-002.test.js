
const doAdd = (a, b, callback) => {
  callback(a + b);
};

describe('Testing Mocks 002', () => {
  test('calls callback with arguments added', () => {
    const mockCallback = jest.fn();
    
    doAdd(1, 2, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(3);
  });
});
