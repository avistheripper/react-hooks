import { useState, useEffect, useDebugValue } from 'react';

export function useTitleInput(initialValue: string) {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
      document.title = value;
    });
    useDebugValue(value);
    return [value, setValue];
  }