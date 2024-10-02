import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import Footer from './component/Footer/Footer';
import CardGrid from './component/CardGrid/CardGrid';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <CardGrid/>
      <Footer/>
    </div>
  );
}

export default App;
