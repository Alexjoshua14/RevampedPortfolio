import './App.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import SkillsPage from './pages/SkillsPage';
import NavBar from './nav/NavBar';
import Portfolio from './pages/Portfolio';
import UnderConstruction from './pages/UnderConstruction';
import Social from './socialLinks/social.js';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <main id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>
      <Social />
    </div> 
  );
}