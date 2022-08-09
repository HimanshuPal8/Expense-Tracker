import React from 'react'
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import { Provider } from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="5088d608-ad9a-4d23-9c3f-456131ac7dd2" language="en-US">
        <Provider>
            <App />
        </Provider>
    </SpeechProvider>,
    document.getElementById('root')
);