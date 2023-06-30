import 'bulma/css/bulma.css';
import './App.css';
import Homepage from './pages/HomePage';
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/Pricing' element={ <Pricing />} />
          <Route path='/Contact' element={ <Contact />} />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
