import { useState } from 'react';

function useToggleState(initialVal = false) {
  const [state, setState] = useState(initialVal);

  const toggle = e => {
    setState(!state);
  };

  return [state, toggle];
}

export default useToggleState;
