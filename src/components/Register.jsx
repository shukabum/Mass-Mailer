import React, { useState } from 'react'
export const  Register =(props)=>{
    const [email, setEmail]=useState("");
    const[pass, setPass]=useState("");
    const[name, setName]=useState("");
    const [disable,setdisable]=useState(1);
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(email);     
    } 
    const handleName =(e)=>{
        const getname=e.target.value;
        setName(getname);
    }
    const handleEmail=(e)=>{
        const getemail=e.target.value;
        setEmail(getemail);
    }
    const handlePassword=(e)=>{
        const getPass=e.target.value;
        setPass(getPass);
        if(getPass.length >6)
        {
            setdisable(0);   
        }
    }
    return (
        <div className='auth-form-container'>
            <form onSubmit={handleSubmit} className="enter-form">
            <h2 className='lgr'>REGISTER</h2>
                <label>Full Name</label>
                <input value={name} onChange={(e)=>handleName(e)} name="name" id="name" placeholder="Full Name" />
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>handleEmail(e)} type="email" placeholder="welcome@gamil.com" id="email" name="email" />
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e)=>handlePassword(e)} type="password" placeholder="********" id="password" name="password" />
                <button onClick={()=>props.onPageSwitch("mainpage")} disabled={disable}>Log In</button>
            </form>
            <button className="link-btn" onClick={()=>props.onFormSwitch("Login")}>Already have an account ? Log In</button>
        </div>
    )
}