import { useState } from "react"


const StringState = () => {
    const [text, setText] = useState<string>('')
    const showTypedText = (e:any) => {
        setText(e.target.value)
    }
  return (
      <>
          <div>
              <p>Exercise:Create an Input filed</p>
              <p>Store input value in state string</p>
              <p>Display typed text</p>
              <input type="text" placeholder="Enter text here" value={text} onChange={showTypedText}/>
              <p>YouTyped:{text}</p>
            </div>
      </>
  )
}

export default StringState