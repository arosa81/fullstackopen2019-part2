import React from 'react';

const Header = ({ courseName }) => <h1>{courseName}</h1>
const PartsContent = ({ parts }) => parts.map(part => <Part key={part.id} part={part} />)
const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      <PartsContent parts={course.parts} />
    </div>
  )
}

export default Course;