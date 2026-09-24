import { useEffect, useState } from 'react'
import mainLogo from '../assets/re-main-logo.png'

export default function Intro() {
  const [visible, setVisible] = useState(true)
  const [quoteVisible, setQuoteVisible] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const quoteTimer = window.setTimeout(() => setQuoteVisible(true), 900)
    const startFade = window.setTimeout(() => setFading(true), 4200)
    const hide = window.setTimeout(() => setVisible(false), 4900)

    return () => {
      window.clearTimeout(quoteTimer)
      window.clearTimeout(startFade)
      window.clearTimeout(hide)
    }
  }, [])

  if (!visible) return null

  const dismiss = () => {
    setFading(true)
    window.setTimeout(() => setVisible(false), 500)
  }

  return (
    <div
      className={`intro ${fading ? 'intro-fade' : ''}`}
      onClick={dismiss}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') dismiss()
      }}
      role="button"
      tabIndex={0}
      aria-label="Pular introdução"
    >
      <div className="intro-inner">
        <img src={mainLogo} alt="Resident Evil" className="intro-logo" />
        <p className={`intro-quote ${quoteVisible ? 'show' : ''}`}>
          “Você quase virou um sanduíche da Jill!”
          <span className="intro-author">— Barry Burton, Resident Evil</span>
        </p>
        <p className="intro-skip">clique para pular</p>
      </div>
    </div>
  )
}
