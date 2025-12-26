import './App.css'
import UserProfileInterface from './components/UserProfileInterface'

function App() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>TypeScript+React Exercises</h1>
      <UserProfileInterface name='Nikhil' age={19} IsOnline={false} city='India'/>
    </>
  )
}

export default App
