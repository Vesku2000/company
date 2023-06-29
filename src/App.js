import 'bulma/css/bulma.css';
import './App.css';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './pages/Pricing';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path='/Homepage' exact component={Homepage} />
        <Route path='/Pricing' component={Pricing} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
