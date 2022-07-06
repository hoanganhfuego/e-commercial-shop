import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from "./page/ProductDetail";
import ProductShowCase from "./page/ProductShowCase";
import HomePage from './page/HomePage';

function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route path='/' element={<HomePage />} exact/>
            <Route path='products/*' element={<ProductShowCase />} />
            <Route path='productdetail/:id/*' element={<ProductDetail /> } exact/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
