import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallary from './components/Gallary';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route>
            <Route path="Home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallary />} />
            <Route path="services" element={<Services />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="footer" element={<Footer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
