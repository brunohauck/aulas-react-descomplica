
import './App.css';

import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/about';
import Header from './components/header';
import ListUsers from './pages/list-users';

function App() {

  const title = "Bruno Hauck brunohauck@gmail.com - Mentor Nerd";
  return (
    <div className="App">
      <Header title={title} />
      <div className='container-fluid'>
        <div className='row'>
          <BrowserRouter>
            <div className='col-md-3'>
              <Sidebar />
            </div>
            <div className='col-md-9'>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/listar' element={<ListUsers />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </div>

  );
}

export default App;


/**
function App() {
  
  const title = "Bruno Hauck brunohauck@gmail.com - Mentor Nerd";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Home />
    </div>
  );
}

export default App; */
