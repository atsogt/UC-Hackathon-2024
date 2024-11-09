import axios from 'axios';
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(0)

  useEffect(()=>{
    const fetchData = async() => {
     try {
      const response = await axios.get('http://localhost:3001/user');
      setData(response.data);
     } catch (error) {
      console.log("Server is throwing error. Error: " + error)
     }
    }
    fetchData();
  },[])

  return (
    <>
      <div>
        {data}
      </div>
        
    </>
  )
}

export default App
