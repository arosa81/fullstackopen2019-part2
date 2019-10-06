import React from 'react';

const Header = ({ courseName }) => <h1>{courseName}</h1>

const Course = ({ course }) => {
  return (
    <div>
      <Header courseName={course.name} />
      {course.parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </div>
  )
}

export default Course;