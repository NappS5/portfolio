// navigation.js
import { Link } from 'react-router-dom';
import './navigation.css'

export function Navigation() {
  return (
    <>
    <div className='navigation-container'>
    <nav>
      <ul>
        <li className='paginas'>
          <Link className='sobre-mim' to="/">Sobre mim</Link>
        </li>
        <li>
          <Link className='portfolio' to="/portfolio">Portfólio</Link>
        </li>
      </ul>
    </nav>
    </div>
    </>
  );
}
