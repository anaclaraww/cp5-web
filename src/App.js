// import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/Hero-Section/Hero-Section';
import Formcontato from './Components/Formcontato/Formcontato'; 
import Rodape from './Components/Rodape/Rodape';
function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Formcontato/>
      <Rodape/>
    </div>
  );
}

export default App;
