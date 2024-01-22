import { useState } from 'react'
import styles from './style';
import { Hero, Navbar, Login, Footer, Register } from './components';
import { Route, Routes } from 'react-router-dom';
import './App.css'

const App = () =>  (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      
      <div className={`${styles.boxWidth}`}>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Register/>}/>
        </Routes>
        
      
      </div>
    </div>
  
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>   
      <Footer/>
      </div>
    </div>

  
  
  
  </div>

  
);
export default App
