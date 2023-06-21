import './App.css';
import {Routes, Route} from 'react-router-dom'
import Nav from './components/Nav.js'
import Home from './components/Home'
import About from './components/About'
import Info from './components/Info'

function App() {
  return (
    <div className="App">
      <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/about"element={<About />} />
      </Routes>
        <div>
          <Info />
        </div>
      </>
    </div>
  );
}

export default App;
