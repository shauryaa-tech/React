import React, { useEffect } from 'react'
import { useState } from 'react';



const User = ({name}) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    // Api Calls
  }, [])

  
  return (
    <div className='user-card m-4 p-4 bg-gray-50 rounded-lg'>
      <h1>Count: {count}</h1>
      <h1>Count2: {count2}</h1>
     <h2>Name: {name}</h2>
     <h3>Location: Gujarat</h3>
     <h4>Contact @shaurya.in</h4>
    </div>
  ); 
};

export default User;