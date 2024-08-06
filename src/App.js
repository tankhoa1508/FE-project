import Featured from './components/featured/Featured';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import Pics from './components/pics/Pics';
import Slider from './components/slider/Slider'

function App() {
  return (
    <div>
        <Header/>
        <Slider/>
        <Pics/>
        <Featured/>
        <Footer/>
    </div>
  );
}

export default App;
