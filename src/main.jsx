import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { AdminAuthProvider } from './components/context/AdminAuth.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminAuthProvider>
      <App />
    </AdminAuthProvider>
  </StrictMode>,
)
