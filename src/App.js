import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Homepage,
  Exchanges,
  Ctyptocurrencies,
  CryptoDetail,
  News,
} from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
            <Navbar/>
        </div>
        <div className="main">
            
                
          <Switch>
            <Route exact path="/exchanges" component={Exchanges} />
            <Route exact path="/ctyptocurrencies" component={Ctyptocurrencies} />
            <Route exact path="/crypto/:coinId" component={CryptoDetail} />
            <Route exact path="/news" component={News} />
            <Route exact path="/" component={Homepage} />
          </Switch>

          <Footer />
          
        </div>
      
          
      
      </div>
      
    </Router>
  );
};

export default App;
