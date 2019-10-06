import React from 'react';
import { bold } from 'ansi-colors';

const Header = ({ courseName }) => <h1>{courseName}</h1>
const PartsContent = ({ parts }) => parts.map(part => <Part key={part.id} part={part} />)
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>
const ExerciseSum = ({ parts }) => {
  let sum = parts.reduce((accum, part) => accum + part.exercises, 0)
  return (
    <p><b>total of {sum} exercises</b></p>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <PartsContent parts={course.parts} />
      <ExerciseSum parts={course.parts} />
    </div>
  )
}

export default Course;