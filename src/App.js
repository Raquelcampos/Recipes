import React from 'react';
import { GlobalStyle } from './Global/style.js';
import Header from './Components/Header/index.jsx'
import Main from './Components/Main/index.jsx'
import Footer from './Components/Footer/index.jsx'
      
export default function App(){

  return(
    <>
    <GlobalStyle/>
    <Header/>
    <Main/>
    <Footer/>
    </>
  )
}