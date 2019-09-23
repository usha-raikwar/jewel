import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
//import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import store from './store/index';

//const store = createStore(cartReducer);


ReactDOM.render(<Provider store={store}>
          <App />
       </Provider>,
        document.getElementById('root'));