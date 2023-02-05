import React, { useState }  from 'react';
export const  Login =( props)=> {
    const [email,setEmail]=useState("");
    const [pass, setPass]=useState("");
    const [success, setSuccess]=useState(false);
    const [disable,setdisable]=useState(1);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setEmail("");
        setPass("");
        setSuccess(true);
        console.log(email);     
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
    <div className='ani'>
                
    <div className='auth-form-container'>
        <form method="post"onSubmit={handleSubmit} className="enter-form">
            <h2 className='lg'>LOGIN</h2>
            <label htmlFor="email">Email&nbsp;</label>
            <input value={email} onChange={(e)=>handleEmail(e)}  type="email" placeholder="welcome@gamil.com" id="email" name="email"  />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e)=>handlePassword(e)}  type="password" placeholder="********" id="password" name="password" />
            <button type="submit" onClick={()=>props.onPageSwitch("mainpage")} disabled ={disable}>Log In</button>
        </form>
        <button className="link-btn" onClick={()=>props.onFormSwitch("Register")}>Don't have an account ? Regitser here.</button>
    </div>
    <div class="letter-image">
        <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
            <div class="letter-border"></div>
            <div class="letter-title"></div>
            <div class="letter-context"></div>
            <div class="letter-stamp">
                <div class="letter-stamp-inner"></div>
            </div>
            </div>
            <div class="top-fold"></div>
            <div class="body"></div>
            <div class="left-fold"></div>
        </div>
        <div class="shadow"></div>
        </div>
    </div>
    );
}
