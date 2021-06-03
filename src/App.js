
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Footer from './components/footer/footer';
import NavBar from './components/navBar/navBar';
import Catalog from './components/catalog/catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     
      <Catalog></Catalog>
      <hr></hr>

      <Footer></Footer>
    </div>
  );
}

export default App;
    



