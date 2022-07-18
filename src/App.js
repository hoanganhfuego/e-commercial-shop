import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from "./page/ProductDetail";
import ProductShowCase from "./page/ProductShowCase";
import ProductRender from "./Components/ProductRender";
import HomePage from './page/HomePage';
import SearchPage from './page/SearchPage';

function App() {
  return(
    <BrowserRouter>
      <div className='App'>
        <Routes>
            <Route path='/' element={<HomePage />} exact/>
            <Route path='products/*' element={<ProductShowCase />}>
              <Route path=':type' element={<ProductRender />} />
            </Route>
            <Route path='productdetail/:id/*' element={<ProductDetail /> } />
            <Route path='search/*' element={<SearchPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
