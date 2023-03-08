import React, {useState, useEffect} from 'react'
import usersDb from './data/users.json'
import md5 from 'md5'
import { useNavigate } from 'react-router-dom'


function Login() {
    const [userName , setUserName] = useState()
    const [password , setPassword] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem('token')
      }, [])
   const validateUser = ()=>{
        usersDb.map(user =>{
            if(user.username === userName && user.password === password){
                localStorage.setItem("token",md5(password))
                if(user.role === "admin"){
                    navigate('/programari')
                }else {
                    navigate('/programari')
                }
            }
        } )
    
   }
    return (
        <div className='login-page'>
            <div className='form-container'>
                <input className='input' onChange={e => setUserName(e.target.value)}></input>
                <input className='input' onChange={e => setPassword(e.target.value)} type="password"></input>
            </div>
            <div>
                <button className='login-button' onClick={validateUser}>Login</button>
                <button className='register-button' onClick={() => {}}>Creaza Cont</button>
            </div>
        </div>
    )
}

export default Login;