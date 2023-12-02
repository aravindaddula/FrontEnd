export default function LoginForm({handleLogin}){
    return(
        <div className="login-form">
            <b>Login Form</b>
            <input type="text" placeholder="User Name"/>
            <input type="text" placeholder="Password"/>
            <button type="button" onClick={()=>handleLogin(true)}>Submit</button>
        </div>
    )
}