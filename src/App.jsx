import React, { useState, useEffect } from 'react';
import { Toggle } from './Toggle';
import { ToggleState } from './ToggleUseState';

const App = () => {
  const [name, setName] = useState('');
  useEffect(() => {
    document.title = name;
  });
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <ToggleState />
        <h3>Controlled state of SFC {name}</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input
            type="text"
            onChange={e => setName(e.target.value)}
            value={name}
          />
          <button>Submit</button>
        </form>
      <br/>
    </div>
  );
};

// const formSubmit = (value, setValue) => {
//   console.log(`Email sent to ${value}!`);
//   setValue('');
// }

export default App;
