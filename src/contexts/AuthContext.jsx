import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        name: "",
        age: "",
        role: "",
    });

 useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
        setUser(JSON.parse(savedUser));
    }
}, []);

const login = (logInData) => {
    localStorage.setItem("user", JSON.stringify(logInData));
    setUser(logInData);
};

const logout = () => {
    localStorage.removeItem("user");
    setUser({
        name: "",
        age: "",
        role: "",
    });
};

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
// Creating Custom Hook;
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("Use Auth must be inside provider");
    }
    return context;
}