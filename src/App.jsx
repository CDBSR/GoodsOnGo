import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import './App.css';
import Demo from './components/Demo';
import Navbar from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    {/* <Navbar/> */}
    </>
  )
}

export default App
