
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/footer';
import NavBar from './components/navBar';
import Catalog from './components/catalog';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
     <h1>hello from react</h1>
     

     <Catalog></Catalog>

     <Footer></Footer>
    </div>
    
  );

}

export default App;
