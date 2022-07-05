import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from "./page/ProductDetail";
import ProductShowCase from "./page/ProductShowCase";
import HomePage from './page/HomePage';
import ProductRender from './Components/ProductRender';
import Products from './Components/Products'; 

function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route path='/' element={<HomePage />} exact/>
            <Route path='products/*' element={<ProductShowCase/> } />
            {/* <Route path='products/:type' element={<ProductRender /> } /> */}
            <Route path='productdetail/:id/*' element={<ProductDetail /> } exact/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
