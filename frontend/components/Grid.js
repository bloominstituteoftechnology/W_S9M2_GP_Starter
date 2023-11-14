import React, { useState } from 'react'

// ❗ Find instructions for this task in the README file

const makeGrid = (size) => {
  const arr = new Array(size)
  for (let i = 0; i < size; i++) {
    arr[i] = new Array(size)
    for (let k = 0; k < size; k++) {
      arr[i][k] = Math.floor(Math.random() * 2)
    }
  }
  return arr
}

function Grid({ size, name }) {
  return (
    <div className='grid'>
      <div>Here is your Grid, {name || 'Anonymous Person'}:</div>
      {
        makeGrid(size).map((row, i) => {
          return (
            <div className='row' key={i}>{
              row.map((elem, k) => {
                const backgroundColor = elem ? 'orange' : 'blue'
                return (
                  <div key={k} style={{ backgroundColor }} className='square'></div>
                )
              })
            }</div>
          )
        })
      }
    </div>
  )
}

export default function GridWidget() {
  const [name, setName] = useState('')
  return (
    <div className="widget">
      <input placeholder="Type your name" onChange={({ target: { value } }) => setName(value)} />
      <Grid size={120} name={name} />
    </div>
  )
}
