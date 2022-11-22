
const random = require('./app');
const fns = require('./fns');

jest.mock('./fns');
const add = a => a + fns.getNumber();

describe('Mocking Random', () => {
  it('expects "add" to add a number and random', () => {
    const mockGetNumber = jest.fn(() => 3);

    const result = random.add(2, mockGetNumber);
    expect(result).toEqual(5);  
  });

  it('expects "add" to use Mock', () => {
    add(2);
    expect(fns.getNumber).toHaveBeenCalled();
  });
});
