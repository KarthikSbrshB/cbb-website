import { Routes, Route } from 'react-router-dom';
import PillNavbar from './components/PillNavbar';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Alumni from './pages/Alumni';
import Events from './pages/Events';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <PillNavbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;