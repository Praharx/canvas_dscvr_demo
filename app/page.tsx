// app/page.js
'use client'

import { useEffect, useState } from 'react'
import { CanvasClient, CanvasInterface } from '@dscvr-one/canvas-client-sdk' 

export default function CanvasPage() {
  const [canvasData, setCanvasData] = useState(null)

  // useEffect(() => {
  //   const initCanvas = async () => {
  //     const canvasClient = new CanvasClient();
  //     const response = await canvasClient.ready();

  //     const user: CanvasInterface.Handsh.User = response.untrusted.user;
  //     const content: CanvasInterface.Handshake.Content = response.untrusted.content;
  //     setCanvasData(data)
  //   }

  //   initCanvas()
  // }, [])

  

  return (
    <div>
      <h1>DSCVR Canvas</h1>
    </div>
    )
}