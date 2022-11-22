
// jest.spyOn( PROTOTYPE or CLASS, METHOD_NAME )

// Spying is to observe calls made to a method
// without changing the method itself.

class MethodClass {
  instanceMethod = () => 'output from instance method';
}

const service = new MethodClass();

describe('Spying 001', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('spy on instance method', () => {
    jest.spyOn(service, 'instanceMethod');

    const result = service.instanceMethod();
    expect(service.instanceMethod).toHaveBeenCalledTimes(1);
    expect(result).toEqual('output from instance method');
  });

  test('spy on instance method and change implementation', () => {
    jest.spyOn(service, 'instanceMethod').mockImplementation(() => 'spy triggered');

    const result = service.instanceMethod();
    expect(service.instanceMethod).toHaveBeenCalledTimes(1);
    expect(result).toEqual('spy triggered');
  });
});
