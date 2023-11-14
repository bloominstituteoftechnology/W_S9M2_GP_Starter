import React, { useEffect, useRef } from 'react'

export default function Webcam() {
  return (
    <div className="widget">
      <video autoPlay />
      <canvas width='640' height='480' />
    </div>
  )
}
