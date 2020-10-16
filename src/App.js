import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SingUp from "./components/pages/SingUp";
import Footer from "./components/Footer";


function App() {
  return (
    <>
        <Router>
            <NavBar />
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/services' component={Services}/>
                <Route path='/products' component={Products}/>
                <Route path='/sing-up' component={SingUp}/>
                <Route path='/sing-up' component={SingUp}/>
            </Switch>
            <Footer/>
        </Router>
    </>
  );
}

export default App;
