import 'bulma/css/bulma.css';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/Pricing' element={ <Pricing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
