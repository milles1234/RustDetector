
import { Route, Routes } from 'react-router-dom';
import './index.css'
import Landing from './pages/Landing'
import FileSelector from './pages/FileSelector'
import Dashboard from './pages/UploadCard'
import {
  SignIn,
  SignUp
} from "@clerk/clerk-react";


function App() {
 

  return (
  <Routes>
  <Route path="/" element={<Landing />} />
  <Route path="/sign-in/*" element={<SignIn />} />
  <Route path="/sign-up/*" element={<SignUp />} />
  <Route path="/dashboard/*" element={<Dashboard />} />
  <Route path="/fileselector/*" element={<FileSelector />} />

</Routes>
  )
}

export default App
