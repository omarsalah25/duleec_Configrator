import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { Analytics } from '@vercel/analytics/react';

import './assets/styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <Analytics />

    </React.StrictMode>
)
