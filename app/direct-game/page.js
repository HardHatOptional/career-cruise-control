'use client'

import { useEffect } from 'react'

export default function DirectGame() {
  useEffect(() => {
    // Redirect to the game directly
    window.location.href = '/DodgeChallenge/index.html'
  }, [])

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Loading Dodge Challenge...</h1>
      <p>If the game doesn't load automatically, <a href="/DodgeChallenge/index.html">click here</a></p>
    </div>
  )
}