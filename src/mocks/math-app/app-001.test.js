
const app = require('./app');
const math = require('./math');

describe('app testing using Mocks 001', () => {
  beforeEach(() => {
    math.add = jest.fn();
    math.subtract = jest.fn();
    
    // This type of mocking is less common for a couple reasons:
    // * jest.mock does this automatically for all functions in a module
    // * jest.spyOn does the same thing but allows restoring the original function
    
    // jest.mock('./math.js');    
  });

  test('calls mock math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });
  
  test('calls mock math.subtract', () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
