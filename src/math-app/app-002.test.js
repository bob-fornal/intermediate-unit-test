
const app = require('./app');
const math = require('./math');

test('calls spy math.add', () => {
  const addMock = jest.spyOn(math, 'add');

  const result = app.doAdd(1, 2);
  expect(result).toEqual(3);
  expect(addMock).toHaveBeenCalledWith(1, 2);
});

test("calls and restores spy math.add", () => {
  const addMock = jest.spyOn(math, 'add');
  addMock.mockImplementation(() => 'mock');

  const result1 = app.doAdd(1, 2);
  expect(result1).toEqual('mock');

  addMock.mockRestore();
  const result2 = app.doAdd(1, 2);
  expect(result2).toEqual(3);
});
