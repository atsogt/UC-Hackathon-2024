// import axios from "axios"
// import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route,
  //  Navigate 
  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import AppRoutes from "./routes/AppRoutes"
import "./App.css"

function App() {
  // const [data, setData] = useState(0)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/user")
  //       setData(response.data)
  //     } catch (error) {
  //       console.log("Server is throwing error. Error: " + error)
  //     }
  //   }
  //   fetchData()
  // }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route  element={<About/>} />
          <Route element={<Contact/>}/>
          <Route element={<Login/>}/>
          <Route element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
