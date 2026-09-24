import { NavLink, Route, Routes } from 'react-router-dom'
import { games } from './data/games'
import Home from './pages/Home'
import GamePage from './pages/GamePage'
import Intro from './pages/Intro'
import './App.css'

function App() {
  return (
    <div className="app">
      <Intro />
      <nav className="tabs">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'tab tab-home active' : 'tab tab-home'
          }
        >
          <span className="tab-re-logo" aria-label="Home">
            <span className="re-r">R</span>
            <span className="re-e">E</span>
          </span>
        </NavLink>
        <div className="tabs-nav">
          {games.map((game) => (
            <NavLink
              key={game.slug}
              to={`/${game.slug}`}
              className={({ isActive }) => (isActive ? 'tab active' : 'tab')}
              title={game.title}
            >
              <img src={game.logo} alt={game.navLabel} className="tab-logo" />
            </NavLink>
          ))}
        </div>
      </nav>

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<GamePage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
