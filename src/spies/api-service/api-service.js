
class ApiService {

  getUsers = async () => {
    try {
      const result = await fetch('/users.json');
      const data = await result.json();
      return data;
    } catch (error) {
      return [];
    }
  };

  filterUsers = (users, searchTerm) => {
    const regex = new RegExp(searchTerm, 'i');
    return users.filter((user) => user.username.match(regex));
  };
}

module.exports = { ApiService };
