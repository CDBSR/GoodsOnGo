import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    </>
  )
}

export default App
