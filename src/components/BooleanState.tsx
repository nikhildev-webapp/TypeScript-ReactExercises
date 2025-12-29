import { useState } from "react"

const BooleanState = () => {
    const [state, setState] = useState<boolean>(false)
    const ToggleButton = () => {
        setState(prevState=>!prevState)
    }
  return (
      <>
          <h1>Boolean State</h1>
          <p>Bulb:{state?"ON":"OFf"}</p>
          <button onClick={ToggleButton}>Click</button>
          <p>Click the button to ON/OFF Bulb</p>
      </>
  )
}

export default BooleanState