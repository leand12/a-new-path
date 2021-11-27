import './App.css';
import Header from 'components/Header';
import Presentation from 'components/Presentation';

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{width: "100%", height: 1000, backgroundColor: "red"}}></div>
      <Presentation />
      <div style={{width: "100%", height: 1000, backgroundColor: "blue"}}></div>
    </div>
  );
}

export default App;
