import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const EditUserForm = ({ user, refreshUsers, closeEdit }) => {
    const [name, setName] = useState(user.name);
    const [lastname, setLastname] = useState(user.lastname);
    const [dob, setDob] = useState(user.dob ? user.dob.slice(0, 10) : '');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://3.91.82.188:3001/api/v1/users/${user.id}`, {
            name,
            lastname,
            dob
        })
            .then(response => {
                alert("User updated successfully!");
                refreshUsers();
                closeEdit();
            })
            .catch(error => {
                console.error("There was an error updating the user!", error);
            });
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2 className="form-header">Edit User</h2>
            <label className="form-label">Name:</label>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-input"
            />
            <label className="form-label">Lastname:</label>
            <input
                type="text"
                placeholder="Lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
                className="form-input"
            />
            <label className="form-label">Date of Birth:</label>
            <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="form-input"
            />
            <div className="button-container">
                <button type="submit" className="update-button">Update User</button>
                <button type="button" onClick={closeEdit} className="cancel-button">Cancel</button>
            </div>
        </form>
    );
};

export default EditUserForm;

