import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';
import Sidebar from './components/sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const siteTitle = "Meu Site"; // Título do site

  return (
    <div className="App">
      <Header title={siteTitle} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Body />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;