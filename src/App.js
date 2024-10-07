// import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/Hero-Section/Hero-Section';
import Funcionalidades from './Components/Funcionalidades/Funcionalidades';
import Depoimentos from './Components/Depoimentos/Depoimentos';
import Formcontato from './Components/Formcontato/Formcontato'; 
import Rodape from './Components/Rodape/Rodape';
function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Funcionalidades/> 
      <Depoimentos /> 
      <Formcontato/>
      <Rodape/>
    </div>
  );
}

export default App;
