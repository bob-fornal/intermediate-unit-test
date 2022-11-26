
const app = require('./app');
const math = require('./math');

describe('app testing using Mocks 001 - jest.fn', () => {
  beforeEach(() => {
    math.add = jest.fn();
    math.subtract = jest.fn();
    
    // This type of mocking is less common for a couple reasons:
    // * jest.mock does this automatically for all functions in a module
    // * jest.spyOn does the same thing but allows restoring the original function
  });

  it('calls mock math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });
  
  it('calls mock math.subtract', () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});

describe('app testing using Mocks 001 - jest.mock', () => {
  beforeEach(() => {
    jest.mock('./math.js');
  });

  it('calls mock math.add', () => {
    app.doAdd(1, 2);
    expect(math.add).toHaveBeenCalledWith(1, 2);
  });
  
  it('calls mock math.subtract', () => {
    app.doSubtract(1, 2);
    expect(math.subtract).toHaveBeenCalledWith(1, 2);
  });
});
