import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const AddUserForm = ({ refreshUsers }) => {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [dob, setDob] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://3.91.82.188:3001/api/v1/users', {
            name,
            lastname,
            dob
        })
            .then(response => {
                console.log("User added successfully!");
                setName('');
                setLastname('');
                setDob('');
                refreshUsers(); // Refresh the user list after adding a new user
            })
            .catch(error => {
                console.error("There was an error adding the user!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-heading">Add User:</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            /><br />
            <input
                type="text"
                placeholder="LastName"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="form-input"
            /><br />
            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="form-input"
            /><br />
            <button type="submit" className="form-button">Add User</button>
        </form>
    );
};

export default AddUserForm;

