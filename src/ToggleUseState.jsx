import React, { useState } from 'react'

export const ToggleState = () => {
    const [isToggled, toggle] = useState(false);
    return (
        <div>
            <button onClick={() => toggle(!isToggled)}>Toggle</button>
            {
                isToggled && <h1>Hello</h1>
            }
        </div>
    )
}