import React, { useMemo, useState, useEffect }from 'react';
import { ToggleState } from './ToggleUseState';
import { useTitleInput } from './hooks/useTitleInput';
import { Counter } from './Counter';

interface Address {
  street: string;
  city: string;
  zipcode: string;
}


interface User {
  name: string;
  address: Address;
  id: string;
}

export const App: React.FC<any> = () => {
  const [name, setName] = useTitleInput('');
  const title = 'Level Up Dishes'
  const reverseWord = (str: string) => str
      .split('')
      .reverse()
      .join('');
  const initialState:  User[]= [];
  const [users, setUsers] = useState(initialState);
  const titleReversed = useMemo(() => reverseWord(title), [title]);

  const getUsers = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])   // To run useEffect only with didMount second param is the empty array
  return (
      <div className="main-wrapper">
      <h1>{ titleReversed }</h1>
      <ToggleState />
      <hr/>
      <Counter />
        <h3>Controlled state of SFC {name}</h3>
        <form onSubmit={e => e.preventDefault()}>
          <input
            type="text"
          />
          <button>Submit</button>
        </form>
        {
          users.map(user => (
            <article className='dish-card dish-card--withImage'>
              <h3>{ user.name }</h3>
              <p>
                  <div>
                    <span>{ user.address.street }</span> |
                    <span>{ user.address.city }</span> |
                    <span>{ user.address.zipcode }</span>
                  </div>
              </p>
            </article>
          ))
        }
        <br/>
      </div>
  );
};

// const formSubmit = (value, setValue) => {
//   console.log(`Email sent to ${value}!`);
//   setValue('');
// }