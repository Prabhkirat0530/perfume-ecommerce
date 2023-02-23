import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './MyComponents/Nav';
import Footer from './MyComponents/Footer'
import MainPage from './MyComponents/MainPage/MainPage';
import { Route, Routes } from "react-router-dom";
import ProductsMainPage from './MyComponents/Products/ProductsMainPage';


function App() {

  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path='/' element={<MainPage title="hello" />} />
        <Route path='/Products' element={<ProductsMainPage />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
