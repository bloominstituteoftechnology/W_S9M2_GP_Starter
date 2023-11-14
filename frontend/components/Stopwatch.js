import React from 'react'

// ❗ Find instructions for this task in the README file

export default function Interval() {
  return (
    <div className="widget">
      <p className="info">Click Split to update total running time</p>
      <p>Total running time is <span>{15} seconds</span></p>
      <p>
        <button>Split</button>
        <button>Lap</button>
      </p>
      <ul>
        <li>Lap {1}: <span>{7} sec</span></li>
        <li>Lap {2}: <span>{8} sec</span></li>
      </ul>
    </div>
  )
}
