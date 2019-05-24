import React, { useState } from 'react'


export const ToggleState: React.FC = () => {
    const [ isToggled, toggle ] = useState<boolean | null>(false);
    return (
        <div>
            <button onClick={() => toggle(!isToggled)}>Toggle</button>
            {
                isToggled && <h1>Hello</h1>
            }
        </div>
    )
}