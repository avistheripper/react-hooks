import React, { useRef, createContext, useMemo, RefForwardingComponent }from 'react';
import { ToggleState } from './ToggleUseState';
import { useTitleInput } from './hooks/useTitleInput';
import { Counter } from './Counter';

interface IProps {

}
export const App: React.FC<IProps> = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();

  const title = 'Level Up Dishes'

  const reverseWord = (str: string) => {
    console.log('FIRED');
    return str
    .split('')
    .reverse()
    .join('');
  }

  const titleReversed = useMemo(() => reverseWord(title), [title]);
  return (
      <div className="main-wrapper">
      <h1>{ titleReversed }</h1>
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