import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects/Projects';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
