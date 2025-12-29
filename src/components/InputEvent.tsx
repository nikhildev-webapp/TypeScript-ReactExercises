import React, { useState } from 'react'

const InputEvent = () => {
    const [name, setName] = useState<string>('');
    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);   
    }
  return (
      <>
          <h1>InputEvent</h1>
          <input type="text"  value={name}placeholder='Enter your name..' onChange={handleChange} />
          <p>Current value:{name}</p>
      </>
  )
}

export default InputEvent