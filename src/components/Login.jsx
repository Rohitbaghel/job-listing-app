import React,{useState,useContext,useEffect} from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { AuthContext } from './Authcontext'

export const LogCom = () => {
    const {token , setToken} = useContext(AuthContext)
    const [data,setData] = useState({})

    const navigate = useNavigate();

    const handleinp = (e) =>{
        const {name,value} = e.target
        setData({
            ...data,
            [name]:value
        })
    }


    const postfun = async (e)=>{
        e.preventDefault();
        try { 
            let req = await fetch(`https://reqres.in/api/login`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
            });
        let res = await req.json();
        if(res.token){
            setToken(res.token)
            navigate(-1)
        }else{alert("Email or Password Incorrect")}
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
        
        <h1>Login page</h1>
        <div style={{display:'flex', justifyContent: 'center'}} >
            <form onSubmit={postfun} style={{display:'grid', width:'20%', justifyContent: 'center',alignItems: 'center',margin:'2% 0%', padding:'2% 0%' ,backgroundColor:'#ffb3b3'}} >
                <input type="text" name="email" onChange={handleinp} placeholder="Email" style={{width:'100%' ,height:'30px',margin:'5% 0%'}} />
                <input type="password" name="password" onChange={handleinp} placeholder="Password" style={{width:'100%' ,height:'30px',margin:'5% 0%'}} />
                <input type="submit" style={{height:'35px',margin:'5% auto 5% 20%', width:'60%'}} />
            </form>
            </div>
            </>
    )
}