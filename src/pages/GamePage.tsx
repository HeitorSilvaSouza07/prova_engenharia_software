import { useState } from 'react'
import { useParams, Navigate, Link } from 'react-router-dom'
import { games, storeLinks, type Game } from '../data/games'

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

      <section className="dc-section dc-stores">
        <h2 className="dc-section-title">ONDE COMPRAR</h2>
        <div className="store-panel">
          <div className="store-price">
            <span className="store-price-label">Preço de referência</span>
            <span className="store-price-value">{game.price}</span>
            <span className="store-price-note">
              Preço cheio na Steam. Em promoções a série chega a −80%.
            </span>
          </div>
          <ul className="store-list">
            {storeLinks(game).map((store) => (
              <li key={store.name}>
                <a
                  className="store-link"
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="store-link-name">{store.name}</span>
                  <span className="store-link-detail">{store.detail}</span>
                  <span className="store-link-cta">Ver oferta →</span>
                </a>
              </li>
            ))}
          </ul>
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
