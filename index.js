function iniciarSesion(){
    let correo = document.getElementById("correo");
    let password = document.getElementById("password");
    const mensajerError = document.getElementById("mensaje_error");

    if(correo.value == "admin@admin.com" && password.value == "admin123"){
        console.log("correcto");
        window.open("./panel.html", "_self");
    }else{
        console.log("error");
        mensajerError.style.visibility = "visible";
    }
}