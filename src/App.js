
import './App.css';
import Banner from './component/Banner';
import Banner2 from './component/Banner2';
import Banner3 from './component/Banner3';
import BannerNav from './component/BannerNav';
import DiscoverBan from './component/DiscoverBan';
import Footer from './component/Footer';
import Fundet from './component/Fundet';
import Header from './component/Header';
import Hero from './component/Hero';


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Banner />
        <BannerNav/>
        <Banner2 />
        <Banner3/>
        <Footer />
        <Header />
        <DiscoverBan />
        <Footer />
        <Header />
        <Fundet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
