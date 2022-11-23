
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
    jest.spyOn(global, 'fetch').mockReturnValue(Promise.resolve({
      json: () => Promise.resolve(MOCK_USERS)
    }));
    const mockReturnValue = [
      { username: 'bob', startDate: '2022-01-01T12:00:00.000Z', days: 100 },
      { username: 'jen', startDate: '2022-02-01T12:00:00.000Z', days: 90 },
      { username: 'patrick', startDate: '2022-03-01T12:00:00.000Z', days: 80 },
      { username: 'anne', startDate: '2022-04-01T12:00:00.000Z', days: 70 }
    ];
    jest.spyOn(service, 'processDates').mockReturnValue(mockReturnValue);
    const expected = [...mockReturnValue];

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

  it('expects "processDates" to process all days', () => {
    jest.spyOn(service, 'processDay').mockReturnValue({ item: 'processed' });
    const data = [{ user: 'bob' }];
    const now = new Date('2022-10-01T12:00:00.000Z');

    service.processDates(data, now);
    expect(service.processDay).toHaveBeenCalledWith(data[0], now);
  });

  it('expects "processDay" to handle no date', () => {
    const item = { user: 'bob' };
    const now = new Date('2022-10-01T12:00:00.000Z');

    service.processDay(item, now);
    expect(item.hasOwnProperty('days')).toEqual(true);
    expect(item.days).toBeNull();
  });

  it('expects "processDay" to handle a date', () => {
    const item = { user: 'bob', startDate: '2022-01-01T12:00:00.000Z' };
    const now = new Date('2022-10-01T12:00:00.000Z');

    service.processDay(item, now);
    expect(item.hasOwnProperty('days')).toEqual(true);
    expect(item.days).toEqual(273);
  });
});
