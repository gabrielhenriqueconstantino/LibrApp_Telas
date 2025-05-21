import { BrowserRouter } from 'react-router-dom';
import './styles/global.css';
import Header from './elements/Header';
import Hero from './elements/Hero';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Hero />
      </div>
    </BrowserRouter>
  );
}

export default App;
