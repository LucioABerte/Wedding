import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Bridegroom from './components/Bridegroom';
import Countdown from './components/Countdown';
import Story from './components/Story';
import Seeyou from './components/Seeyou';
import Cbu from './components/CBU';
import Gallery from './components/Gallery';
import Where from './components/Where';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Sidebar />
      <div className="App">
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Seeyou />
        <Gallery />
        <Cbu />
        <Where />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;
