// import React from 'react'

const List = () => {
    const fruits: string[] = ["apple", "banana", "orange"]
    const todos: string[] = [
        "Buy groceries",
        "Walk the dog",
        "Finish project"
    ]
  return (
      <>
          <h2>Fruit list</h2>
          <ul>
              {fruits.map((fruit, index) => (
                  <li key={index}>{fruit}</li>
              ))}
          </ul>
          <h2>Todo list</h2>
          <ul>
              {todos.map((todo, index) => (
                  <li key={index}>{todo}</li>
              ))}
          </ul>
      </>
  )
}

export default List
