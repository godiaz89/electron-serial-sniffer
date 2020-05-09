import React from 'react'
import './components/photon/style/css/photon.css'
import Home from './components/photon/Home'
import { Provider } from 'react-redux'
import store from './redux/store'


export default function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
        
    )
}
