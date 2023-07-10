import React from "react";
import './Login.css';
import LogoLogIn from '/Users/julia/Desktop/Visual/Bootcamp/Shop-main/Shop-main/src/images/pngegg.png'

function Login(){
    return(
        <div className="LogInPrincipalContainer">
            <img className="imageLogin" src={LogoLogIn} />
                <form className="sendLogin" action="">
                    <div className="credentialsLogin">
                        <div>
                            <span class="material-symbols-outlined">
                                lock
                            </span>
                            <input className="email" type="email" placeholder="Email Adress" />
                        </div>

                        <div>
                            <span class="material-symbols-outlined">
                                mail
                            </span>
                            <input className="password" type="password" placeholder="Password" />
                        </div>
                    </div>
                    
                    <div className="divBtnLogin">
                        <input className="btn btn-login" type="submit" value="LOGIN" />
                    </div>
                </form>
                <p>
                        don't have an account yet? <br/>
                    <a href="./">
                        Register
                    </a>
                </p>
        </div>

    )

}

export default Login;