import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import About from './pages/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Listar } from './pages/listar';

function App() {
  const siteTitle = "Meu Site"; // Título do site

  return (
    <div className="App">
      <Header title={siteTitle} />
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/listar' element={<Listar />} />
                </Routes>

            </div>
          </BrowserRouter>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
