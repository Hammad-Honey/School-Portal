import { createContext,useContext,useState } from "react";

const AuthContext=createContext();

export function AuthProvider({children}){
    const [user,setUser]=useState({
        Name:"",
        Age:"",
        Role:"",
    });

    const login=(logInData)=>{    console.log(logInData); return setUser(logInData)};

    const logout=()=>setUser({
    Name: "",
    Age: "",
    Role: "",
  });

    return(
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}
// Creating Custom Hook;
export function useAuth(){
    const context=useContext(AuthContext);
    if(!context){
        throw new Error("Use Auth must be inside provider");
    }
    return context;
}