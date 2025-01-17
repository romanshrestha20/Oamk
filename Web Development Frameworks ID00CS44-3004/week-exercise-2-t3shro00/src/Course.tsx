import React from 'react';
import './Course.css';
interface CourseProps {
  name: string;
  courseId: string;
  studentPositions: number;
}

const Course: React.FC<CourseProps> = ({ name, courseId, studentPositions }) => {
  return (
    <div className="course">
      <h2>{name}</h2>
      <p>{courseId}</p>
      <p>Student Positions: {studentPositions}</p>
    </div>
  );
};

export default Course;
