import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Login from "./components/admin/Login"
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from "./components/admin/Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  )
}

export default App 
