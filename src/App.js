import './App.css';
import {Link, Routes, Route} from 'react-router-dom';
import About from "./About/About";
import Home from './Home/Home';
import Contacts from './Contacts/Contacts';

export default function App() {
  return (
    <div className="App">
      <h1>Наше первое react приложение</h1>
        <div className="router-nav-container">
          <nav className='navigation-menu'>
            <div className='navigation-menu__container'>
              <div>
                <Link to="/home">Домой</Link>
              </div>
              <div>
                <Link to="/contacts">Контакты</Link>
              </div>
              <div>
                <Link to="/about">О нас</Link>
              </div>
            </div>
          </nav>
        </div>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}
