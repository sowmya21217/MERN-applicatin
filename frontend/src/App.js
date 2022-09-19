import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from './components/footer';
import Slide from './components/Slide';

const  App = () => {
  return (
    <div className="App"> 
      <Header title= "Sephora Website" Home= "Home" /> 
      <Slide />
      <Footer /> 
    </div>
  );
}

export default App;
