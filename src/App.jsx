import React, { useState } from 'react';
import { Toggle } from './Toggle';
import { ToggleState } from './ToggleUseState';

const App = () => {
  const [name, setName] = useState('');
  return (
    <div className="main-wrapper">
      <h1>Level Up Dishes</h1>
      <Toggle />
      <ToggleState />
        <h3>Controlled state of SFC {name}</h3>
      <input type="text" onChange={e => setName(e.target.value)} value={name}/>
      <br/>
    </div>
  );
};

export default App;
