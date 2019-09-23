import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Navbar from './components/NavBar';
import Footer from './components/Footer'
import PageContent from './components/PageContent';
import CartPage from './components/CartPage';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
        <div className="App">
        
          <Navbar/>
            <Switch>
                <Route exact path="/" component={PageContent}/>
                <Route path="/cart" component={CartPage}/>
              </Switch>
          <Footer />   
        </div>
  </BrowserRouter>
    );
  }
}

export default App;