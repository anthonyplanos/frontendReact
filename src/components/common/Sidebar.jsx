import { useContext } from "react"
import { Link } from "react-router-dom"
import { AdminAuthContext } from "../context/AdminAuth"

const Sidebar = () => {
    const {logout} = useContext(AdminAuthContext)
    return (
        <div className="sidebar">
            <div className="card-body p-4">
                <ul>
                    <li><Link to="/admin/categories">Categories</Link></li>
                </ul>
            </div>
            <button className="btn btn-primary" onClick={logout}>Logout</button>
        </div>
    )
}

export default Sidebar
            