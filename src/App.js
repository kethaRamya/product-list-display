import logo from './logo.svg';
import './App.css';
import ProductList from './pages/Product/ProductList'
import UserProvider from './context';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from './components/Form'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="App-header">
          <p style={{ padding: '10px' }}>Product List</p>
        </div>
        <BrowserRouter
        >
          <Routes>
            <Route element={<ProductList />} path="/" />
            <Route element={<Form />} path="/add" />
          </Routes>

        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
