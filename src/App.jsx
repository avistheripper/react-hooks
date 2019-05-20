import React, { useRef }from 'react';
import { Toggle } from './Toggle';
import { ToggleState } from './ToggleUseState';
import { useTitleInput } from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  return (
    <div className="main-wrapper" ref={ref}>
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
