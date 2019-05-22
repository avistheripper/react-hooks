import React, { useRef, createContext }from 'react';
import { Toggle } from './Toggle';
import { ToggleState } from './ToggleUseState';
import { useTitleInput } from './hooks/useTitleInput';
import { Counter } from './Counter';

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  return (
      <div className="main-wrapper" ref={ref}>
      <h1>Level Up Dishes</h1>
      <ToggleState />
      <hr/>
      <Counter />
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
