import 'bulma/css/bulma.css';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import Pricing from './pages/Pricing';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Whopage from './pages/Whopage';
import AboutCompanypage from './pages/AboutCompanypage';
import Commentspage from './pages/Commentspage';


function App() {
  return (
    <div className="App">

      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={ <Homepage />} />
          <Route path='/Pricing' element={ <Pricing />} />
          <Route path='/Contact' element={ <Contact />} />
          <Route path='/Whopage' element={ <Whopage />} />
          <Route path='/AboutCompanypage' element={ <AboutCompanypage />} />
          <Route path='/Commentspage' element={ <Commentspage />} />

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
