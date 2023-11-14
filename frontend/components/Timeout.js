import React, { useEffect, useRef, useState } from 'react'

export default function Timeout({ timeoutSeconds = 3 }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleClick = () => {
    console.log('doing stuff')
  }

  return (
    <div className="widget">
      {isVisible
        ? <div>
          <button onClick={handleClick}>Do stuff with the page</button>
        </div>
        : <div>
          Please log back in
        </div>}
    </div>
  )
}
