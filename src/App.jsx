import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import WorkList from './components/Pages/WorkList';
import Contact from './components/Pages/Contact';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
        <main>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/work' element={<WorkList />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </main>
    </div>
    </Router>
  );
}

export default App;
