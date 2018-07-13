import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import registerServiceWorker from './frontend/registerServiceWorker';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(<Router><App/></Router>,
    document.getElementById('root'));
registerServiceWorker();
