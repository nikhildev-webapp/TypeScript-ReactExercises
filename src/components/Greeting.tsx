//import React from 'react'
type GreetinProps = {
    name: string;
}
const Greeting = (props:GreetinProps) => {
  return (
      <>
        <h1>Hy! My name is {props.name}</h1>
      </>
  )
}

export default Greeting