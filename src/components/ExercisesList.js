import React, { useState, useEffect } from 'react';
import Exercise from './Exercise';
import axios from 'axios';

const ExercisesList = () => {
    const [exercises, setExercises] = useState([]);

    const deleteExercise = (id) => {
        axios.delete('http://localhost:5000/exercises/' + id).then((res) => console.log(res.data));

        setExercises(exercises.filter((exercise) => exercise._id !== id));
    };

    const exerciseList = () => {
        return exercises.map((exercise) => <Exercise exercise={exercise} deleteExercise={deleteExercise} key={exercise._id} />);
    };

    useEffect(() => {
        axios
            .get('http://localhost:5000/exercises/')
            .then((res) => {
                setExercises(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            <h3>Logged Exercises</h3>
            <table className="table">
                <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Description</th>
                        <th>Duration</th>
                        <th>Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{exerciseList()}</tbody>
            </table>
        </div>
    );
};

export default ExercisesList;
