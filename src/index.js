import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss'; //sass를 이용한 style
import App from './components/App'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
