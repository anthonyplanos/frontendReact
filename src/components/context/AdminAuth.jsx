import { createContext, useState } from "react";

export const AdminAuthContext = createContext({
    user: null,
    login: () => {},
    logout: () => {},
});

export const AdminAuthProvider = ({ children }) => {
    const adminInfo = JSON.parse(localStorage.getItem('adminInfo') || 'null');
    const [user, setUser] = useState(adminInfo);

    const login = (user) => {
        setUser(user);
        localStorage.setItem('adminInfo', JSON.stringify(user));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('adminInfo');
    }

    return (
        <AdminAuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AdminAuthContext.Provider>
    );
}