import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Resume from './components/Resume'

function App() {
  return (
    <div className="App">
     
<div>
  
  <Header/>

  <Welcome/>

  <AboutMe/>

  <Projects/>

  <Resume/>

  <Footer/>


</div>

    </div>
  );
}

export default App;
