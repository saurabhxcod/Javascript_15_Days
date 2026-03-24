import React from 'react'
import Counter from '../hooks/useState/Counter';
import FetchData from '../hooks/useEffect/FetchData';
import Counter2 from '../hooks/useEffect/Counter';
import ChangeBg from '../hooks/useLayoutEffect/ChangeBg';

const App = () => {
  return (
    <>
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      {/* <FetchData /> */}
      <ChangeBg />
    </>
  )
}

export default App;