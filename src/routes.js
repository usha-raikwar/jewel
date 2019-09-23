import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App';
import CartPage from './components/CartPage';

const routes = (
 <Router>
         <App>
             <Route exact path="/" component={App}/>
             <Route path="/cart" component={CartPage}/>               
         </App>
 </Router>
)

export default routes 