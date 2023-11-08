import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import About from './components/about/about';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Me from './components/me/me';
import NewPage from './components/newpage/newpage';
import './App.css';
import './components/resposive/responsive.css'
import './components/me/me.css'
import './components/reset/reset.css'


function App() {
  return (
    <>
      <Router>
        <div >
          <Routes>
            <Route path="/portfolio" element={<NewPage />} />
            <Route path="/" element={
              <div className='container-app'>
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
