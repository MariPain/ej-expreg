function checkEmail(email){
    let regExp = /^[a-z0-9+\.+\_+\-]*@[a-z0-9+]*\.+\w{2,4}$/gi.test(email)

    if(regExp){
    alert('El email es correcto')
    } else{
    alert('Este correo NO es correcto')
    }
}


function checkPassword(password){
    let regExpPas = /^[\w\d][\w\d\W]{6,19}$/gi.test(password)

    if(regExpPas){
    alert('El password es correcto')
    } else{
    alert('Este password NO es correcto')
    }
}


function checkRace(datalist){
    let regExpData = /^(humano|elfo|hobbit|enano)$/gi.test(datalist)

    if(regExpData){
    alert(`La raza ${datalist} existe`)
    } else{
    alert(`la raza ${datalist} NO es correcta`)
    }
}

document.getElementById('form').addEventListener('submit', (event) =>{
    event.preventDefault();
    let email = document.getElementById('email').value;
    checkEmail(email)
    let password = document.getElementById('password').value;
    checkPassword(password)
    let datalist = document.getElementById('datalist').value;
    checkRace(datalist)
})
