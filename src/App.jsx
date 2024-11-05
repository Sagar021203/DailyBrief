 import React,{useState} from 'react'
 import Navbar from './Components/Navbar'
 import NewsBody from './Components/NewsBody'
 import Footer from './Components/Footer'

 function App() {

  const [category,setCategory] =useState('general')

   return (
     <>
     <Navbar setCategory={setCategory}/>
     <NewsBody category={category}/>
     <Footer/>
     </>
   )
 }
 
 export default App