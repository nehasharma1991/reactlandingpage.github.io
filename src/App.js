import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Slider from './Component/Slider';

function App() {
  return (
    <div className="App">
        {/* header part */}
        <Header/>  
        <Slider/>
    </div>
  );
}

export default App;
