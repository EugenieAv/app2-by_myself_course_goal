import React, { useState } from 'react';
import CourseInput from './Component/CourseGoals/CourseInput/CourseInput';
import CourseGoalList from './Component/CourseGoals/CourseGoalList/CourseGoalList';
import './App.css';


const App = () => {

  const [CourseGoals, setCourseGoals] = useState([
    {text: 'Do all exercices!', id: 'g1'},
    {text: 'Finish this course!', id: 'g2'}
  ]);


  const addGoalHandler = (enteredText) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter( goal => goal.id !== goalId );
      return updatedGoals;
    })
  };
  
  let content = <CourseGoalList items={CourseGoals} onDeleteItem={deleteItemHandler} />

  return(
    <div>
      <section id="goal-form">
        <CourseInput OnAddGoal={addGoalHandler}/>
      </section>
      <section id="goals">
        {content}
      </section>
    </div>
  );
};

export default App;
