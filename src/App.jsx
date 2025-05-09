import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Bashboard_content from './Components/Bashboard_content'
import VideoEmbedded from './Components/CallPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProfilePage from './Components/ProfilePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/Contacts" element={<VideoEmbedded />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<Bashboard_content/>} />
        </Routes>
        
        {/* <VideoEmbedded/> */}
    </Router>
   
    </>
  )
}

export default App
