import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Coins from './component/Coins/Coins';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element = {<HomePage></HomePage>}></Route>
        <Route path='/coins' element = {<Coins></Coins>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}></Route>
        <Route path='/about' element = {<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
