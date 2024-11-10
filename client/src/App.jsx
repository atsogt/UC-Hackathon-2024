// import axios from "axios"
// import { useState, useEffect } from "react"
import {
  BrowserRouter,
  Routes,
  Route,
  //  Navigate
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Features from "./pages/Features";
import AssignmentPage from "./pages/AssignmentPage";
import Navbar from "./pages/Navbar";
import People from "./pages/People";
import Profile from "./pages/Profile";
import "./App.css";
import ViewAssignment from "./pages/ViewAssignment";
import { useParams } from 'react-router-dom';

function App() {
  const {userId} = useParams();

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
  const feautures = '/feautures/' + userId;

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path={feautures} element={<Features />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/assignment" element={<AssignmentPage />} />
          <Route path="/people" element={<People />} />
          <Route path="/viewassignment" element={<ViewAssignment />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
