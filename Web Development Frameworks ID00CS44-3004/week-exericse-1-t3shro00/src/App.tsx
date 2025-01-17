import './App.css'
import React from 'react';
import Question from './components/Question';

interface AppProps {
  question: string;
  options: string[];
}

const App: React.FC<AppProps> = ({ question, options }) => {
  return (
    <div className="App">
      <Question question={question} options={options} />
    </div>
  );
};

export default App;