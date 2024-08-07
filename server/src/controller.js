const pool = require('../db');
const queries = require('./queries');

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUser = (req, res) => {
    const { name, lastname, dob } = req.body;

    pool.query(queries.addUser,
        [name, lastname, dob],
        (error, results) => {
            if (error) throw error;
            res.status(201).send('User Created Successfully!');
        });
};

const deleteUser = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send(`User with id=${id} does not exist`);
        } else {
            pool.query(queries.deleteUser, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send('User was removed successfully');
            });
        }
    });
};

const updateUser = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, lastname, dob } = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;

        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.send(`User with id=${id} does not exist`);
        } else {
            pool.query(queries.updateUser, [name, lastname, dob, id], (error, results) => {
                if (error) throw error;
                res.status(200).send('User was updated successfully');
            });
        }
    });
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser
};
