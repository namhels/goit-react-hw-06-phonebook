import { useState, useEffect } from 'react';
import { save, get } from 'utils';

export default function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(() => {
    return get(key) ?? defaultValue;
  });

  useEffect(() => {
    save(key, state);
  }, [key, state]);

  return [state, setState];
}
