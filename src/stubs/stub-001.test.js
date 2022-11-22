
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
  
  it('expecets stub .toBeCalled', () => {
    const stub = jest.fn();
    
    stub();
    expect(stub).toBeCalled();
    expect(stub).toHaveBeenCalled();
  });

  it('expecets stub .not.toBeCalled', () => {
    const stub = jest.fn();
    
    // stub();
    expect(stub).not.toBeCalled();
    expect(stub).not.toHaveBeenCalled();
  });
  
  it('expecets spyOn .toBeCalled', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething');
  
    testObject.logSomething();
    expect(somethingSpy).toBeCalled();
    expect(somethingSpy).toHaveBeenCalled();
  });

  it('expecets spyOn .mockImplementation', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething').mockImplementation();

    testObject.logSomething();
    expect(somethingSpy).toHaveBeenCalled(); // no console.log
  });

  it('expecets spyOn .mockReturnValue', () => {
    const somethingSpy = jest.spyOn(testObject, 'logSomething').mockReturnValue();

    testObject.logSomething();
    expect(somethingSpy).toHaveBeenCalled(); // no console.log
  });
});
