import './App.css';
import FirstPage from "./components/FirstPage"
import SecondPage from './components/SecondPage';
import WhyChoose from './components/WhyChoose';
import FourthPage from './components/FourthPage';

function App() {
  return (
    <div className ="app">
      <FirstPage/>
      <SecondPage/>
      <WhyChoose/>
      <FourthPage/>

    </div>
  );
}

export default App;
