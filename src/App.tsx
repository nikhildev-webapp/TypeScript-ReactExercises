import './App.css'
import Greeting from './components/Greeting'
import UserCard from './components/UserCard'

function App() {
 console.log(UserCard)
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>TypeScript+React Exercises</h1>
      <Greeting name='Nikhil' />
      <UserCard name='Nikhil' age={18} isOnline={true} city='Delhi' />
    </>
  )
}

export default App
