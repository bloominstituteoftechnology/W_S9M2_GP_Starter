import React, { useEffect, useRef, useState } from 'react'

export default function Timeout({ timeoutSeconds = 3 }) {
  const [isVisible, setIsVisible] = useState(true)
  const loadTimeRef = useRef(Date.now())

  useEffect(() => {
    // loadTimeRef.current = Date.now()
    console.log('Timeout mounted!')
    return () => console.log('Timeout about to unmount...')
  }, [])

  const handleClick = () => {
    const currentTime = Date.now()
    const elapsedTime = (currentTime - loadTimeRef.current) / 1000

    if (elapsedTime > timeoutSeconds) setIsVisible(false)
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
