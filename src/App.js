import './App.css';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Me from './components/me/me';
import './components/reset/reset.css'
import NewPage from './components/newpage/newpage';


function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path="/portfolio" element={<NewPage />} />
            <Route path="/" element={
              <div>
                <Header />
                <Me />
                <About />
                <Footer />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
