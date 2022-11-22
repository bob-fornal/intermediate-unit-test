
const { ApiService } = require('./api-service');

describe('API Service', () => {
  let service;
  const MOCK_USERS = [
    { username: 'bob' },
    { username: 'jen' },
    { username: 'patrick' },
    { username: 'anne' }
  ];

  beforeEach(() => {
    service = new ApiService();
  });

  test('expects "getUsers" to gets users', async () => {
    const expected = [...MOCK_USERS];
    jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve({
      json: () => Promise.resolve(MOCK_USERS)
    }));

    const result = await service.getUsers();
    expect(result).toEqual(expected);
  });

  test('expects "getUsers" to reject', async () => {
    jest.spyOn(global, 'fetch').mockReturnValue(Promise.reject({}));

    const result = await service.getUsers();
    expect(result).toEqual([]);
  });

});
