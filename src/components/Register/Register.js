import React from "react";
import './Register.css';
import LogoRegister from '/Users/julia/Desktop/Visual/Bootcamp/Shop-main/Shop-main/src/images/pngegg.png'

function Register() {
    return (
        <div className="RegisterPrincipalContainer">
            <img className="imageRegister" src={LogoRegister} />
            <div className="createNewAccountText">
                <hr className="hr left" />
                <p><h2 className="create">CREATE NEW ACCOUNT</h2></p>
                <hr className="hr rigth" />
            </div>
            <form className="sendRegister" action="">
                <div className="credentialsRegister">
                    <div>
                        <span class="material-symbols-outlined">
                            person
                        </span>
                        <input className="input user" type="text" placeholder="User" />
                    </div>

                    <div>
                        <span class="material-symbols-outlined">
                            badge
                        </span>
                        <input className="input name" type="text" placeholder="Name" />
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            mail
                        </span>
                        <input className="input email" type="email" placeholder="Email Adress" />
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            phone_iphone
                        </span>
                        <input className="input phone" type="tel" placeholder="Phone Number" />
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            home
                        </span>
                        <input className="input adress" type="text" placeholder="Adress" />
                    </div>
                    <div>
                        <span class="material-symbols-outlined">
                            lock
                        </span>
                        <input className="input password" type="password" placeholder="Password" />
                    </div>
                </div>

                <div className="divBtnRegister">
                    <input className="btn btnRegister" type="submit" value="REGISTER" />
                </div>
            </form>
        </div>

    );
}


export default Register;