import React, { useState, useMemo } from 'react'

const initialTodos = [
  { id: 1, task: 'Learn React', completed: false },
  { id: 2, task: 'Build a To-Do App', completed: true },
  { id: 3, task: 'Share with friends', completed: false }
]

export default function Todos() {
  const [todos] = useState(initialTodos)
  const [showAll, setShowAll] = useState(true)

  const filteredTodos = todos.filter(td => showAll || !td.completed)

  return (
    <div className="widget">
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Incomplete' : 'Show All'}
        </button>
      </div>
      <ol>
        {filteredTodos.map(todo => {
          const style = { textDecoration: todo.completed ? 'line-through' : 'none' }
          return <li key={todo.id} style={style}>{todo.task}</li>
        })}
      </ol>
    </div>
  )
}
