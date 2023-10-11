import { useState, useRef, useEffect, useLayoutEffect } from 'react';

function ExampleComponent() {
  const [number, setNumber] = useState(0);
  const [sectionStyle, setSectionStyle] = useState({});

  /* 
  useEffect is asynchronous. 
  You see the number change in the DOM before the padding changes. 

  useLayoutEffect is synchronous. 
  You see the number change only after the padding has changed.
  */

  // change to useLayoutEffect to see the difference
  useLayoutEffect(() => {
    const random = Math.floor(Math.random() * 500);

    /* loop is just to make the changes in this example slow enough to be observable */
    for (let i = 0; i <= 1000000000; i++) {
      if (i === 1000000000) setSectionStyle({ paddingTop:`${random}px`})
    }
  }, [number])

  return (
    <main className="App">
      <section  style={sectionStyle}>
        <p>{number}</p>
        <div>
          <button onClick={() => setNumber(prev => prev - 1)}>-</button>
          <button onClick={() => setNumber(prev => prev + 1)}>+</button>
        </div>
      </section>
    </main>
  );
}

export default ExampleComponent


