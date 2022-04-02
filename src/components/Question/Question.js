import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
            <h3>What is the difference between prpos and state?</h3>
            <p>In prpos, the data is passed from one component to another. 
                In State, the data is passed within the component only.
                prpos are read only. That means it's immutable, cannot be modified.
                But states are read-write. That means is mutable, can be modified.

            </p>
            <h3>How useState works?</h3>
            <p>
                In react features, hook is a special function. useState is a hook that add React state to function components.
                We can pass the initial state to the function and it returns a variable
                with the current state value and another function to update the value.
                It allow us to declare one or more state variable in function componenets.
                React keeps track of these state variables.

            </p>
        </div>
    );
};

export default Question;