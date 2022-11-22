
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
}

module.exports = { ApiService };
