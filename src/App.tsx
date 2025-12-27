import './App.css'
import Counter from './components/Counter'
import ObjectState from './components/ObjectState'
import StringState from './components/StringState'

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>TypeScript+React Exercises</h1>
      <Counter /><br />
      <StringState /><br />
      <ObjectState/>
    </>
  )
}

export default App
