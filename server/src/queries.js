const getUsers = 'SELECT * FROM users';
const getUserById = 'SELECT * FROM users WHERE id = $1';
const addUser = 'INSERT INTO users (name, lastname, dob) VALUES ($1, $2, $3)';
const deleteUser = 'DELETE FROM users WHERE id = $1';
const updateUser = 'UPDATE users SET name = $1, lastname = $2, dob = $3 WHERE id = $4;';


module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser
}