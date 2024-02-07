import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Login from './components/Login';


function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Books/>} />
      <Route path="/Login" element={<Login/>}></Route> 
    </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
