import { useNavigate } from "react-router-dom"

function NotFound(){
    const navigate=useNavigate()
    return(
        <>
        <h1>Opss! Something Went Wrong</h1>
        <p>Go Back to Homepage</p>
        <button onClick={()=>navigate('/')}>Back To Home</button>
        </>
    )
}

export default NotFound