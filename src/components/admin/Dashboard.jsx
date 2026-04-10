import React, { useContext } from 'react'
import Layout from '../common/Layout'
import { AdminAuthContext } from '../context/AdminAuth';
import Sidebar from '../common/Sidebar';

const Dashboard = () => {
  const {logout} = useContext(AdminAuthContext);
  return (
    <Layout>
      <div>Dashboard</div>
      <Sidebar />
    </Layout>
  )
}

export default Dashboard