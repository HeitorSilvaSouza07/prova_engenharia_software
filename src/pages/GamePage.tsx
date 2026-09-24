import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { games, type Game } from '../data/games'

function GameView({ game }: { game: Game }) {
  const [sceneIndex, setSceneIndex] = useState(0)
  const scene = game.scenes[sceneIndex]

  return (
    <div className="page game-page dc-page">
      <section className="dc-hero">
        <span className="dc-kicker">JOGO</span>
        <h1 className="dc-title">
          <img src={game.logo} alt={game.title} className="dc-logo" />
        </h1>
        <p className="dc-meta">
          {game.year} · {game.tagline}
        </p>
        <p className="dc-synopsis">{game.history[0]}</p>
      </section>

      <section className="dc-section">
        <h2 className="dc-section-title">INFORMAÇÕES DO JOGO</h2>
        <dl className="dc-info">
          <div>
            <dt>Gênero</dt>
            <dd>{game.genre}</dd>
          </div>
          <div>
            <dt>Desenvolvedora</dt>
            <dd>{game.developer}</dd>
          </div>
          <div>
            <dt>Ano</dt>
            <dd>{game.year}</dd>
          </div>
          <div>
            <dt>Sinopse</dt>
            <dd>{game.tagline}</dd>
          </div>
        </dl>
      </section>

      <article className="dc-history">
        {game.history.slice(1).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>

      <section className="dc-section">
        <h2 className="dc-section-title">PERSONAGENS</h2>
        <ul className="dc-starring">
          {game.cast.map((character) => (
            <li key={character.name} className="dc-starring-item">
              <img
                src={character.image}
                alt={character.name}
                className="dc-starring-thumb"
              />
              <span className="dc-starring-name">{character.name}</span>
              <span className="dc-starring-desc">{character.description}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="dc-section">
        <h2 className="dc-section-title">GALERIA</h2>
        <div className="dc-gallery">
          <img
            src={scene}
            alt={`Cena de ${game.title} ${sceneIndex + 1}`}
            className="dc-gallery-main"
          />
          <div className="dc-gallery-thumbs">
            {game.scenes.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`dc-gallery-thumb${index === sceneIndex ? ' active' : ''}`}
                onClick={() => setSceneIndex(index)}
                aria-label={`Ver cena ${index + 1}`}
              >
                <img src={src} alt="" />
              </button>
            ))}
          </div>
        </div>
      </section>

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

export default function GamePage() {
  const { slug } = useParams()
  const game = games.find((g) => g.slug === slug)

  if (!game) {
    return <Navigate to="/" replace />
  }

  return <GameView key={game.slug} game={game} />
}
