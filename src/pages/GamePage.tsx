import { useParams, Navigate, Link } from 'react-router-dom'
import { games } from '../data/games'

export default function GamePage() {
  const { slug } = useParams()
  const game = games.find((g) => g.slug === slug)

  if (!game) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="page game-page">
      <p className="game-year">{game.year}</p>
      <h1 className="game-logo-wrap">
        <img src={game.logo} alt={game.title} className="game-logo" />
      </h1>
      <p className="game-tagline">{game.tagline}</p>

      <article className="history">
        {game.history.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <div className="characters">
        <div className="character-card hero">
          <img src={game.protagonist.image} alt={game.protagonist.name} />
          <div className="character-info">
            <span className="character-role">Protagonista</span>
            <span className="character-name">{game.protagonist.name}</span>
            <span className="character-desc">{game.protagonist.description}</span>
          </div>
        </div>
        {game.pursuers.map((pursuer) => (
          <div key={pursuer.name} className="character-card villain">
            <img src={pursuer.image} alt={pursuer.name} />
            <div className="character-info">
              <span className="character-role">Perseguidor / Vilão</span>
              <span className="character-name">{pursuer.name}</span>
              <span className="character-desc">{pursuer.description}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="game-nav">
        {(() => {
          const index = games.findIndex((g) => g.slug === game.slug)
          const prev = games[index - 1]
          const next = games[index + 1]
          return (
            <>
              {prev && (
                <Link className="game-nav-link" to={`/${prev.slug}`}>
                  ← {prev.navLabel}
                </Link>
              )}
              <Link className="game-nav-link" to="/">
                Home
              </Link>
              {next && (
                <Link className="game-nav-link" to={`/${next.slug}`}>
                  {next.navLabel} →
                </Link>
              )}
            </>
          )
        })()}
      </div>
    </div>
  )
}
