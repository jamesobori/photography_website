import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Gallary from './components/Gallary';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Gallary />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
