import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';

function App() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    const fetchUsers = () => {
        axios.get("http://3.91.82.188:3001/api/v1/users").then((response) => {
            setListOfUsers(response.data);
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const deleteUser = (id) => {
        axios.delete(`http://3.91.82.188:3001/api/v1/users/${id}`)
            .then(response => {
                console.log("User deleted successfully!");
                fetchUsers(); // Refresh the user list after deletion
            })
            .catch(error => {
                console.error("There was an error deleting the user!", error);
            });
    };

    const closeEdit = () => {
        setEditingUser(null);
    };

    return (
        <div className="app-container">
            {editingUser ? (
                <EditUserForm user={editingUser} refreshUsers={fetchUsers} closeEdit={closeEdit} />
            ) : (
                <>
                    <AddUserForm refreshUsers={fetchUsers} />
                    <table className="user-table">
                        <thead>
                        <tr>
                            <th className="table-header">ID</th>
                            <th className="table-header">Name</th>
                            <th className="table-header">Lastname</th>
                            <th className="table-header">Date of Birth</th>
                            <th className="table-header">Delete</th>
                            <th className="table-header">Edit</th>
                        </tr>
                        </thead>
                        <tbody>
                        {listOfUsers.map((user) => (
                            <tr key={user.id}>
                                <td className="table-cell">{user.id}</td>
                                <td className="table-cell">{user.name}</td>
                                <td className="table-cell">{user.lastname}</td>
                                <td className="table-cell">{user.dob}</td>
                                <td className="table-cell">
                                    <button className="delete-button" onClick={() => deleteUser(user.id)}>Delete</button>
                                </td>
                                <td className="table-cell">
                                    <button className="edit-button" onClick={() => setEditingUser(user)}>Edit</button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default App;

