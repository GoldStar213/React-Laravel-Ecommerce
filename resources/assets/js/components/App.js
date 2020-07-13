import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './Header'
import Nav from './Nav'
import Main from './Main'
import Footer from './footer'


const App = () => (
    <div>
        <Header/>
        <Nav/>
        <Main/>
        <Footer/>
    </div>

)

export default App

