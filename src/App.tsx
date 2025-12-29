import './App.css'
import BooleanState from './components/BooleanState'
import ClickEvent from './components/ClickEvent'
import InputEvent from './components/InputEvent'
import UnionType from './components/UnionType'

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>TypeScript+React Exercises</h1>
      <BooleanState /><br />
      <UnionType /><br />
      <ClickEvent /><br />
      <InputEvent/>
    </>
  )
}

export default App
