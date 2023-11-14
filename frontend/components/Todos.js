import React, { useState, useMemo } from 'react'

const initialTodos = [
  { id: 1, task: 'Learn React', completed: false },
  { id: 2, task: 'Build a To-Do App', completed: true },
  { id: 3, task: 'Share with friends', completed: false }
]

export default function Todos() {
  const [todos] = useState(initialTodos)
  const [showAll, setShowAll] = useState(true)
  const [dark, setDark] = useState(false)

  const olStyle = {
    color: dark ? 'white' : '#ff4b00',
    backgroundColor: dark ? '#ff4b00' : 'white',
  }

  const memoTodos = useMemo(() => {
    console.log('ugh, extremely slow filtering...')
    return todos.filter(td => showAll || !td.completed)
  }, [showAll])

  return (
    <div className="widget">
      <ol style={olStyle}>
        {memoTodos.map(todo => (
          <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.task}
          </li>
        ))}
      </ol>
      <div>
        <button onClick={() => setDark(!dark)}>
          {dark ? 'Light Theme' : 'Dark Theme'}
        </button>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Only Incomplete' : 'Show All'}
        </button>
      </div>
    </div>
  )
}
