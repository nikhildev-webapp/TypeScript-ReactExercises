import { useState } from "react"


const ClickEvent = () => {
    const [text, setText] = useState<boolean>(false)
    const clickButton = () => {
        setText(prevState=>!prevState)
    }
  return (
      <>
          <h1>Click-Event</h1>  
          <p>{text?'You click the button':''}</p>
          <button onClick={clickButton}>Click</button>
      </>
  )
}

export default ClickEvent