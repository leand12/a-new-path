import './App.css';
import Header from 'components/Header';
import HeaderBanner from 'components/HeaderBanner';
import Body from 'components/Body';
import FooterBanner from 'components/FooterBanner';
import Footer from 'components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderBanner />
      <Body />
      <FooterBanner />
      <Footer />
    </div>
  );
}

export default App;
