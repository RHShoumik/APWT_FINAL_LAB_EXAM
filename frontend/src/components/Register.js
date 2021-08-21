import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
function Register()
{

    const [employeeName,setuserName] = useState("")
    const [phone,setphone] = useState("")
    const [companyName,setcompanyName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const history = useHistory()

    async function signUp()
    {
        let item={employeeName,companyName,phone,password,email}
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
            <h1>Register Page</h1>
            <input type="text" value={employeeName} onChange={(e)=>setuserName(e.target.value)} className="form-control" placeholder="Employee Name"/>
            <br/>
            <input type="text" value={companyName} onChange={(e)=>setcompanyName(e.target.value)} className="form-control" placeholder="Company Name"/>
            <br/>
            <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} className="form-control" placeholder="Contact Number"/>
            <br/>
            <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="User Name"/>
            <br/>
            <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
            <br/>
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>
    )
}
export default Register