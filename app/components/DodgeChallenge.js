'use client'

import { useEffect, useRef, useState } from 'react'

export default function DodgeChallenge() {
  const iframeRef = useRef(null)
  const [gameUrl, setGameUrl] = useState('/DodgeChallenge/index.html')

  useEffect(() => {
    // Log when game is mounted for debugging
    console.log('Dodge Challenge game mounted')
    console.log('Game URL:', gameUrl)
    
    // Add event listener to handle any iframe load errors
    const iframe = iframeRef.current
    if (iframe) {
      iframe.onerror = () => {
        console.error('Error loading iframe')
      }
      
      iframe.onload = () => {
        console.log('Iframe loaded successfully')
      }
    }
    
    return () => {
      if (iframe) {
        iframe.onerror = null
        iframe.onload = null
      }
    }
  }, [gameUrl])

  return (
    <div className="dodge-challenge-container">
      <div className="game-status">
        <p>Status: Loading game from {gameUrl}</p>
      </div>
      <iframe
        ref={iframeRef}
        src={gameUrl}
        title="Dodge Challenge Game"
        style={{
          width: '100%',
          height: '600px',
          border: '2px solid #333',
          borderRadius: '8px',
        }}
        allow="autoplay"
      />
      <div className="game-controls">
        <button onClick={() => console.log('Current iframe ref:', iframeRef.current)}>
          Debug Game
        </button>
      </div>
    </div>
  )
}