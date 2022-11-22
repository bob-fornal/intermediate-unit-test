
const app = require('./app');
const math = require('./math');

describe('app testing using Mocks 003', () => {
  test('calls jest.fn() math.add', () => {
    const originalAdd = math.add;
    math.add = jest.fn(originalAdd);

    const result1 = app.doAdd(1, 2);
    expect(result1).toEqual(3);
    expect(math.add).toHaveBeenCalledWith(1, 2);

    math.add.mockImplementation(() => 'mock');
    const result2 = app.doAdd(1, 2);
    expect(result2).toEqual('mock');
    expect(math.add).toHaveBeenCalledWith(1, 2);

    math.add = originalAdd;
    const result3 = app.doAdd(1, 2);
    expect(result3).toEqual(3);
  });
});
