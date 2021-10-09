import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {
//   Homepage,
//   Exchanges,
//   Ctyptocurrencies,
//   CryptoDetail,
//   News,
// } from "./pages/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import { Spin } from "antd";

const Exchanges = React.lazy(() => import("./pages/Exchanges"));
const Ctyptocurrencies = React.lazy(() => import("./pages/Ctyptocurrencies"));
const News = React.lazy(() => import("./pages/News"));
const CryptoDetail = React.lazy(() => import("./pages/CryptoDetail"));

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Suspense fallback={<Spin size="large" />}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/exchanges" component={Exchanges} />
              <Route
                exact
                path="/ctyptocurrencies"
                component={Ctyptocurrencies}
              />
              <Route exact path="/crypto/:coinId" component={CryptoDetail} />
              <Route exact path="/news" component={News} />
            </Switch>
          </Suspense>

          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
