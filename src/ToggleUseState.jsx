import React, { useState, useContext } from 'react'
import { UserContext } from './App';

export const ToggleState = () => {
    const [ isToggled, toggle ] = useState(false);
    const { user } = useContext(UserContext);
    if (!user) return null;
    return (
        <div>
            <button onClick={() => toggle(!isToggled)}>Toggle</button>
            {
                isToggled && <h1>Hello</h1>
            }
        </div>
    )
}