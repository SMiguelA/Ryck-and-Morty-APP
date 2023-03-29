const validacion = (userData, userErrors, setErrors) => {
    if(!userData.username){
        setErrors({...userErrors, username: "Por favor, complete este campo"});
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)){
        setErrors({...userErrors, username: "El usuario debe ser un email"});
    }else if(userData.username.length > 35){
        setErrors({...userErrors, username: "No puede tener mas de 35 caracteres"});
    }else if(!/\d/.test(userData.password)){
        setErrors({...userErrors, password: "Debe tener minimo un número", username: ""});
    }else if(!/^([a-zA-Z0-9_-]){6,10}$/.test(userData.password)){
        setErrors({...userErrors, password: "La longitud debe ser entre 6 y 10 caracteres", username: ""});
    }else{
        setErrors({...userErrors, password: "", username: ""});
    }
};

export default validacion;