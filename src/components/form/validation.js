export default function validate(input) {
    // input = {email:--, password:--}
    const error = {};
    //error= {email: ERROR}
    const regexEmail = /\S+@\S+\.\S+/;
    const regexPassword  = new RegExp("[0-9]");

    if(!regexEmail.test(input.email)) {
        error.email = "Debe ingresar un email valido!";
    }
    if(input.email){
        error.email = "Este campo no debe estar vacio";
    }
    if(input.email.length > 35){
        error.email = "No mayor a 35 caracteres!";
    }
    if(!regexPassword.test(input.password)){
        error.password = "Debe ingresar una contraseña valida!";
    }
    if(input.password.length < 6 || input.password.length > 10)  {
        error.password = "Entre 6 y 10 caracteres!"
    }
    return error;
}