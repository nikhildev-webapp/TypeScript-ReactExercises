import { useState } from "react"

type User = {
    name: string,
    age:number
}

const ObjectState = () => {
    const [users, setUser] = useState<User>({ name: '', age: 0 })
    const updateName = (newName:string) => {
        setUser(prevuser => ({
            ...prevuser,name:newName
        }))
    }
  return (
      <>
          <div>
              <p>Exercise:Store user info in state:</p>
              <p>name,email</p>
              <p>Update name only</p>
          </div>
          <div>
              <p>Welcome,{users.name}</p>
              <button onClick={()=>updateName('Nikhil')}>SetName</button>
          </div>
      </>
  )
}

export default ObjectState