
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
  
  test('spyOn .toBeCalled', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething');
  
    testObject.logSomething();
    expect(somethingSpy).toBeCalled();
    expect(somethingSpy).toHaveBeenCalled();
  });  
});
