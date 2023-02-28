const { client } = require("../../connection/client");

const getUsers = (request, response) => {
  client.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
};

module.exports = {
  getUsers,
}