import './App.css'

import React from 'react';
import CourseList from './CourseList';

interface Course {
  name: string;
  courseId: string;
  studentPositions: number;
}

interface AppProps {
  courses: Course[];
}

const App: React.FC<AppProps> = ({ courses }) => {
  return (
    <div className="App">
      <h1>Courses Offered</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default App;
