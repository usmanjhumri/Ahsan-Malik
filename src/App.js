import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Players from './components/Players/Players';
import GamePlay from './components/GamePlay/GamePlay';
import Gam from './components/GAM/Gam';

function App() {
  return (
    <div className="App">
     <Home/>
     <Players/>
     <GamePlay/>
     <Gam/>

    </div>
  );
}

export default App;
