//React
import React from 'react';

//css
import './App.css';

//components
import Person from './components/person/Person';
import Friends from './components/friends/Friends';

function App() {
  return (
    <div className="App">
      <Person />
      <Friends />
    </div>
  );
}

export default App;
