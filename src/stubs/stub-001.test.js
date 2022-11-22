
const testObject = {
  logSomething() {
    console.log('this does something');
  }
};

describe('Testing Stubs', () => {
  beforeAll(() => {
    jest
      .spyOn(console, 'log')
      .mockImplementation(() => ({}));
  });
  
  test('stub .toBeCalled', () => {
    const stub = jest.fn();
    
    stub();
    expect(stub).toBeCalled();
    expect(stub).toHaveBeenCalled();
  });

  test('stub .not.toBeCalled', () => {
    const stub = jest.fn();
    
    // stub();
    expect(stub).not.toBeCalled();
    expect(stub).not.toHaveBeenCalled();
  });
  
  test('spyOn .toBeCalled', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething');
  
    testObject.logSomething();
    expect(somethingSpy).toBeCalled();
    expect(somethingSpy).toHaveBeenCalled();
  });

  test('spyOn .mockImplementation', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething').mockImplementation();

    testObject.logSomething();
    expect(somethingSpy).toHaveBeenCalled(); // no console.log
  });

  test('spyOn .mockReturnValue', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething').mockReturnValue();

    testObject.logSomething();
    expect(somethingSpy).toHaveBeenCalled(); // no console.log
  });
});
