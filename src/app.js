import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import light from '@fortawesome/fontawesome-pro-light';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

fontawesome.library.add(light);

ReactDOM.render(<AppRouter />, document.getElementById('app'));
