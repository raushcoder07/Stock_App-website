import React from 'react';
import ReactDOM from 'react-dom'; 

import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider ,theme } from '@chakra-ui/react';


import App from './App';

ReactDOM.render(
    <Router>
        <ChakraProvider>
            <App />
        </ChakraProvider>
    </Router>,
    document.getElementById('root')
);
