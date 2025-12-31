import { useState } from "react"

// import React from 'react'
const Form = () => {
    const containerStyle:any = {
        border: '1px solid white',
        display: 'inline-block',
        padding: '10px',
        margin: ' 10px',
        position: 'absolute',
        top: '30%',
        left:'50%',
        transform:'translate(-50%,-50%)'
    }
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<number>();
  return (
      <>
          <div  style={containerStyle}>
              <form>
                  <h2>TestForm</h2>
                  <label>Name: </label>
                  <input  type="text" placeholder="Enter your Name.."  value={name}/><br />
                  <label >Phone:</label>
                  <input  type="tel" placeholder="Enter Phone Number.." value={phone} /><br />
                  <button style={{padding:'5px',borderRadius:'10px',position:'relative',left:'30%', marginTop:'10px'}}>SaveData</button>
              </form>
          </div>
      </>
  )
}

export default Form