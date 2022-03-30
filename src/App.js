import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import CoinDetails from './component/CoinDetails/CoinDetails';
import Coins from './component/Coins/Coins';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import HomePage from './component/HomePage/HomePage';
import BdAddress from './component/Contact/BdAddress';
import UsAddress from './component/Contact/UsAddress';
import NotFound from './component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element = {<HomePage></HomePage>}></Route>
        <Route path='/coins' element = {<Coins></Coins>}></Route>
        <Route path='/coinDetails/:id' element = {<CoinDetails></CoinDetails>}></Route>
        <Route path='/contact' element = {<Contact></Contact>}>
          <Route path='bd-address' element = {<BdAddress></BdAddress>}></Route>
          <Route path='us-address' element = {<UsAddress></UsAddress>}></Route>
        </Route>
        <Route path='/about' element = {<About></About>}></Route>
        <Route path='*' element = {<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
