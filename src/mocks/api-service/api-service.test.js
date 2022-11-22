
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
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(MOCK_USERS)
    }));

    fetch.mockClear();
  });

  test('expects "getUsers" to gets users', async () => {
    const expected = [...MOCK_USERS];

    const result = await service.getUsers();
    expect(result).toEqual(expected);
  });

  test('expects "getUsers" to reject', async () => {
    fetch.mockRejectedValueOnce(new Error('ERROR CODE'));

    const result = await service.getUsers();
    expect(result).toEqual([]);
  });

});
