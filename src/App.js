import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Me from './components/me/me';
import './components/reset/reset.css'
import NewPage from './components/newpage/newpage';
import SocialMedia from './components/socialmedia/socialmedia';

function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Página Inicial</Link>
              </li>
              <li>
                <Link to="/nova-pagina">Nova Página</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/nova-pagina" element={<NewPage />} />
            <Route path="/" element={
              <div>
                <Header />
                <Me />
                <About />
                <Footer>
                  <SocialMedia />
                </Footer>
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
