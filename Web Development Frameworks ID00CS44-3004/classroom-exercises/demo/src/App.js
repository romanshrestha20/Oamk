import React from 'react';

// Define the function that returns a greeting message
function getGreeting() {
  return 'Welcome to the World of React';
}

// Define the functional component
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>{getGreeting()}</p>
      <MyButton/>
    </div>
  );
}

function MyButton(){
  return (
    <button>click me!!!</button>
  )
}

export default App;
