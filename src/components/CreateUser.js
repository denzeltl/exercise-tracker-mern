import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
    const [username, setUsername] = useState('');

    const handleUserChange = (e) => {
        setUsername(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: username,
        };

        console.log(user);

        axios.post('http://localhost:5000/users/add', user).then((res) => console.log(res.data));

        setUsername('');
    };

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userInput">User: </label>
                    <input type="text" name="userInput" id="userInput" required className="form-control" value={username} onChange={handleUserChange} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
