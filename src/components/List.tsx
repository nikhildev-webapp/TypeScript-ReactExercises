import React, { useState } from 'react'

const List = () => {
    const [fruits, setFruits] = useState<string[]>(["apple", "banana", "orange"])
    const [newFruit, setNewFruit] = useState<string>("")

    const todos: string[] = [
        "Buy groceries",
        "Walk the dog",
        "Finish project"
    ]

    const addFruit = (e?: React.FormEvent) => {
        e?.preventDefault()
        const value = newFruit.trim()
        if (!value) return
        setFruits(prev => [...prev, value])
        setNewFruit("")
    }

  return (
      <>
          <h2>Fruit list</h2>
          <form onSubmit={addFruit} style={{display: 'flex', gap: 8, marginBottom: 12}}>
              <label htmlFor="new-fruit" style={{display: 'none'}}>Add fruit</label>
              <input id="new-fruit" value={newFruit} onChange={e => setNewFruit(e.target.value)} placeholder="Add new fruit" />
              <button type="submit" disabled={!newFruit.trim()}>Add</button>
          </form>
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
