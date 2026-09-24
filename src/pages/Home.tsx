import {
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from 'react'

const WORDS = ['Resident', 'Evil']

let nextLetterIndex = 0
const WORD_LETTERS = WORDS.map((word) =>
  [...word].map((ch) => ({ ch, index: nextLetterIndex++ })),
)

const QUOTES = [
  {
    text: 'Você quase virou um sanduíche da Jill!',
    author: 'Barry Burton · Resident Evil',
  },
  {
    text: 'Sete minutos é tudo o que posso gastar brincando com você.',
    author: 'Albert Wesker · Resident Evil',
  },
  {
    text: 'Bem-vindo à família, filho!',
    author: 'Jack Baker · Resident Evil 7',
  },
  {
    text: 'S.T.A.R.S....',
    author: 'Nemesis · Resident Evil 3',
  },
]

const LETTER_STEP_MS = 45

export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null)
  const burstTimer = useRef<number | undefined>(undefined)
  const [burst, setBurst] = useState(false)
  const [quoteIndex, setQuoteIndex] = useState(-1)
  const [typed, setTyped] = useState('')

  useEffect(() => () => window.clearTimeout(burstTimer.current), [])

  useEffect(() => {
    if (quoteIndex < 0) return
    const text = QUOTES[quoteIndex].text
    let written = 0
    const id = window.setInterval(() => {
      written += 1
      setTyped(text.slice(0, written))
      if (written >= text.length) window.clearInterval(id)
    }, LETTER_STEP_MS)
    return () => window.clearInterval(id)
  }, [quoteIndex])

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const el = rootRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height
    el.style.setProperty('--mx', `${(x * 100).toFixed(2)}%`)
    el.style.setProperty('--my', `${(y * 100).toFixed(2)}%`)
    el.style.setProperty('--tilt-x', `${((0.5 - y) * 7).toFixed(2)}deg`)
    el.style.setProperty('--tilt-y', `${((x - 0.5) * 9).toFixed(2)}deg`)
  }

  const handlePointerLeave = () => {
    const el = rootRef.current
    if (!el) return
    el.style.setProperty('--tilt-x', '0deg')
    el.style.setProperty('--tilt-y', '0deg')
  }

  const activate = () => {
    setTyped('')
    setQuoteIndex((prev) => (prev + 1) % QUOTES.length)
    setBurst(true)
    window.clearTimeout(burstTimer.current)
    burstTimer.current = window.setTimeout(() => setBurst(false), 750)
  }

  const quote = quoteIndex >= 0 ? QUOTES[quoteIndex] : null
  const quoteDone = quote ? typed.length >= quote.text.length : false

  return (
    <div
      className="page home home-center"
      ref={rootRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <p className="home-kicker">Survival Horror · desde 1996</p>

      <h1 className={`home-title${burst ? ' burst' : ''}`}>
        <button
          type="button"
          className="home-title-btn"
          onClick={activate}
          aria-label="Resident Evil — clique para revelar uma frase"
        >
          {WORD_LETTERS.map((letters, wordIndex) => (
            <span
              className={`home-word ${wordIndex === 0 ? 'title-resident' : 'title-evil'}`}
              key={WORDS[wordIndex]}
            >
              {letters.map(({ ch, index }) => (
                <span
                  className="home-letter"
                  key={index}
                  style={{ animationDelay: `${(0.25 + index * 0.06).toFixed(2)}s` }}
                >
                  <span className="home-letter-glyph">{ch}</span>
                </span>
              ))}
            </span>
          ))}
        </button>
      </h1>

      <p className="home-sub">oito capítulos · uma infecção que não termina</p>

      <div className="home-message" aria-live="polite">
        {quote ? (
          <blockquote className={`home-quote${quoteDone ? ' done' : ''}`}>
            “{typed}
            {quoteDone ? null : <span className="home-caret" />}
            <footer className="home-quote-author">{quote.author}</footer>
          </blockquote>
        ) : (
          <p className="home-hint">clique no título… se tiver coragem</p>
        )}
      </div>

      <p className="home-explore">use as abas acima para abrir cada capítulo</p>
    </div>
  )
}
