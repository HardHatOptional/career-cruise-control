import DodgeChallenge from './components/DodgeChallenge'

export default function Home() {
  return (
    <main>
      <h1>Career Cruise Control</h1>
      <p>Navigate your career path while having fun!</p>
      
      <div className="game-container">
        <h2>Play Dodge Challenge</h2>
        <DodgeChallenge />
      </div>
    </main>
  )
}