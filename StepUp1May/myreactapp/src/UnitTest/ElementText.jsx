// ElementComponent.js
import React from 'react';
import { useState } from 'react';

function ElementComponent() {
    const [showText,setShowText]=useState(true)
  return (
    <div>
        <button onClick={()=>setShowText(!showText)}>{showText?"Hide Text":"Show Text"}</button>
      <p>{showText?"Element Text":""}</p>
    </div>
  );
}

export default ElementComponent;
