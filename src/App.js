import { Fragment } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductList from './components/ProductsList'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import Default from './components/Default'
import Details from './components/Details'
import { Route, Routes } from 'react-router-dom'
import Modal from './components/Modal';

function App() {
  return (
  <Fragment>
    <Navbar/>
    <Routes>
     <Route>
       <Route index element={<ProductList/>} />
       <Route path="cart" element={<Cart/>}/>
       <Route path="details" element={<Details/>} />
       <Route path="*" element={<Default/>}/>
     </Route>
    </Routes>
    <Modal/>
  </Fragment>
  );
}

export default App;
