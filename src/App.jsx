import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Login from "./components/admin/Login"
import { ToastContainer, toast } from 'react-toastify';
import Dashboard from "./components/admin/Dashboard";
import { AdminRequireAuth } from "./components/admin/AdminRequireAuth";
import { AdminAuthProvider } from "./components/context/AdminAuth";
import {default as ShowCategories} from "./components/admin/category/Show";
import {default as CreateCategory} from "./components/admin/category/Create";

function App() {

  return (
    <>
      <AdminAuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/dashboard" element={
              <AdminRequireAuth>
                <Dashboard />
              </AdminRequireAuth>
            } />
            <Route path="/admin/categories" element={
              <AdminRequireAuth>
                <ShowCategories />
              </AdminRequireAuth>
            } />
            <Route path="/admin/categories/create" element={
              <AdminRequireAuth>
                <CreateCategory />
              </AdminRequireAuth>
            } />
          </Routes>
        </BrowserRouter>
      </AdminAuthProvider>

      <ToastContainer />
    </>
  )
}

export default App 