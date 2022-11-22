
// This comes from the JEST documentation:
// https://jestjs.io/docs/mock-functions

function forEach(items, callback) {
  for (let data of items) {
    callback(data);
  }
}

describe('Testing Mocks 003', () => {
  it('expects the use of the .mock property', () => {
    const mockCallback = jest.fn(x => 42 + x);
    
    forEach([0, 1], mockCallback);
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);
    expect(mockCallback.mock.results[0].value).toBe(42);
  });
});
