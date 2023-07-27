import About from './components/about/About';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Services from './components/services/services';
import Achievement from './components/achievement/Achievement';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Achievement/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
