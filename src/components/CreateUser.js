import React, { useState } from 'react';

const CreateUser = () => {
    const [user, setUser] = useState('');

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const username = {
            user: user,
        };

        console.log(username);

        setUser('');
    };

    return (
        <div>
            <h3>Create New User</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="userInput">User: </label>
                    <input type="text" name="userInput" id="userInput" required className="form-control" value={user} onChange={handleUserChange} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default CreateUser;
