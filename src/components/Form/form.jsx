import { useState } from "react";
import validacion from "./validation";
import Style from "./form.module.css"
import img from '../../img/log.png'


const Form = ({login, setAcces}) => {
    setAcces(false);

    const [userData, setUser] = useState({
        username: "",
        password: "",
    })

    const [userErrors, setErrors] = useState({
        username: "",
        password: "",
    })

    const handleInput = (event) => {
        let propiedad = event.target.name;
        let value = event.target.value;

        setUser({...userData, [propiedad]:value});
        validacion({...userData, [propiedad]:value}, userErrors, setErrors);
    };

    const handleSubmit = (event) => {

        // * El preventDefault evita que submit recargue la pagina

        event.preventDefault();
        login(userData)
    };



    return(
        <div className={Style.contPadre}>
            <form className= {Style.formStyle} onSubmit={handleSubmit} >
                <div className={Style.cont}>
                    <img src={img} alt="" className={Style.img} />
                    <div className={Style.inputDiv}>
                        <label htmlFor="username">Username: </label>
                        <input type="text" name="username" className={Style.input} value={userData.username} onChange={handleInput} />
                        <p>{userErrors.username}</p>
                    </div>
                    <div className={Style.inputDiv2}>
                        <label htmlFor="password">Password: </label>
                        <input type="text" name="password" className={Style.input} value={userData.password} onChange={handleInput} />
                        <p>{userErrors.password}</p>
                    </div>
                    <button>LOGIN</button>
                </div>
            </form>
        </div>
        
    );
};

export default Form;