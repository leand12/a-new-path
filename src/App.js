import './App.css';
import Header from 'components/Header';
import Body from 'components/Body';
import Footer from 'components/Footer';
import Banner from 'components/Banner';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />

      <Body />

      <div style={{ width: "100%", height: 1000, backgroundColor: "blue" }}></div>
      <Footer />
    </div>
  );
}

export default App;
