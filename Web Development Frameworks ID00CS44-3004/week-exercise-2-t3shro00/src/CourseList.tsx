import React from 'react';
import Course from './Course';

interface Course {
  name: string;
  courseId: string;
  studentPositions: number;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <Course
          key={course.courseId}
          name={course.name}
          courseId={course.courseId}
          studentPositions={course.studentPositions}
        />
      ))}
    </div>
  );
};

export default CourseList;
