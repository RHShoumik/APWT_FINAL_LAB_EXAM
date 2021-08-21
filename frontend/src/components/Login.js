import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
function Login()
{
    
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const history = useHistory()

    async function login()
    {
        let item={password,email}
        console.warn(item)
        let result = await fetch("http://localhost:8000/api/register",{
            method : 'POST',
            body : JSON.stringify(item),
            headers : {
                "Content-Type" : 'application/json',
                "Accept" : 'application/json'
            }
        })
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/Employee")
    }

    return(
        <div className="col-sm-6 offset-sm-3">
            <h1>Login</h1>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="User Name"/>
            <br/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
            <br/>
            <button onClick={login} className="btn btn-primary">Login</button>
        </div>
    )
}
export default Login