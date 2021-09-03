import React, {useState} from 'react';
import './CourseInput.css';
import Button from '../../UI/Button/Button';

const CourseInput = (props) => {
    const [enteredValue, setEnteredValue] = useState('');


    const goalInputChangeHandler = (event) => {
        setEnteredValue(event.currentTarget.value)
    }
    const formSubmitHandler = (event) => {
        event.preventDefault();
        console.log(event);
        props.OnAddGoal(enteredValue);
    }

    return(
        <form onSubmit={formSubmitHandler}>
            <div className="form-control">
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}></input>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default CourseInput;