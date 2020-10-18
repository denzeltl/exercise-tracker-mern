import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreateExercise = () => {
    const [username, setUsername] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(0);
    const [date, setDate] = useState(new Date());
    const [users, setUsers] = useState([]);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleDurationChange = (e) => {
        setDuration(e.target.value);
    };
    const handleDateChange = (date) => {
        setDate(date);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const exercise = {
            username: username,
            description: description,
            duration: duration,
            date: date,
        };

        console.log(exercise);

        axios.post('http://localhost:5000/exercises/add', exercise).then((res) => console.log(res.data));

        window.location = '/';
    };

    useEffect(() => {
        axios.get('http://localhost:5000/users/').then((res) => {
            if (res.data.length > 0) {
                setUsers(res.data.map((user) => user.username));
                setUsername(res.data[0].username);
            }
        });
    }, []);

    return (
        <div>
            <h3>Create New Exercise Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="usernameInput">Username: </label>
                    <select name="usernameInput" id="usernameInput" required className="form-control" value={username} onChange={handleUsernameChange}>
                        {users.map((user) => {
                            return (
                                <option value={user} key={user}>
                                    {user}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="descriptionInput">Description: </label>
                    <input name="descriptionInput" id="descriptionInput" required type="text" required className="form-control" value={description} onChange={handleDescriptionChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="durationInput">Duration: </label>
                    <input name="durationInput" id="durationInput" type="text" required className="form-control" value={duration} onChange={handleDurationChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="dateInput">Date: </label>
                    <div>
                        <DatePicker id="dateInput" selected={date} onChange={handleDateChange} />
                    </div>
                </div>
                <div className="form-group">
                    <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default CreateExercise;
