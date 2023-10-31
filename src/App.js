import './App.css';
import About from './components/about/about';
import Header from './components/header/header';
import Me from './components/me/me';
import './components/reset/reset.css'

function App() {
  return (
   <div>
    <Header />
    <Me />
    <About />
   </div>
  );
}

export default App;
