
const { ApiService } = require('./api-service');

const MOCK_USERS = [
  { username: 'bob' },
  { username: 'jen' },
  { username: 'patrick' },
  { username: 'anne' }
];

describe('API Service', () => {
  let service;

  beforeEach(() => {
    service = new ApiService();
  });

  it('expects "getUsers" to gets users', async () => {
    const expected = [...MOCK_USERS];
    jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve({
      json: () => Promise.resolve(MOCK_USERS)
    }));

    const result = await service.getUsers();
    expect(result).toEqual(expected);
  });

  it('expects "getUsers" to reject', async () => {
    jest.spyOn(global, 'fetch').mockReturnValue(Promise.reject({}));

    const result = await service.getUsers();
    expect(result).toEqual([]);
  });

  it('expects "filterUsers" to return the correct elements - single, lowercase', () => {
    const users = [...MOCK_USERS];
    const searchTerm = 'bob';
    const expected = [{ username: 'bob' }];

    const result = service.filterUsers(users, searchTerm);
    expect(result).toEqual(expected);
  });

  it('expects "filterUsers" to return the correct elements - single, uppercase', () => {
    const users = [...MOCK_USERS];
    const searchTerm = 'BOB';
    const expected = [{ username: 'bob' }];

    const result = service.filterUsers(users, searchTerm);
    expect(result).toEqual(expected);
  });

  it('expects "filterUsers" to return all elements - empty search term', () => {
    const users = [...MOCK_USERS];
    const searchTerm = '';
    const expected = [...MOCK_USERS];

    const result = service.filterUsers(users, searchTerm);
    expect(result).toEqual(expected);
  });

  it('expects "filterUsers" to return no elements - single, lowercase', () => {
    const users = [...MOCK_USERS];
    const searchTerm = 'tim';
    const expected = [];

    const result = service.filterUsers(users, searchTerm);
    expect(result).toEqual(expected);
  });
});
