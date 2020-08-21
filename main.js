function laske(){
    let lampo = document.getElementById('syota').value*1;
    let action = document.getElementById('toiminto').value;
    let result;

    if (action == "FC"){
        console.log('muunnetaan F => C');
        console.log(FC(lampo));
        result = FC(lampo);
    }

    if (action == "CF"){
        console.log('muunnetaan C => F');
        console.log(CF(lampo));
        result = CF(lampo);
    }

    if (action == "FK"){
        console.log('muunnetaan F => K');
        console.log(FK(lampo));
        result = FK(lampo);
    }

    if (action == "KF"){
        console.log('muunnettaan K => F');
        console.log(KF(lampo));
        result = KF(lampo);
    }

    if (action == "KC"){
        console.log('muunnetaan K => C');
        console.log(KC(lampo));
        result = KC(lampo);
    }

    if (action == "CK"){
        console.log('muunnetaan C => K');
        console.log(CK(lampo));
        result = CK(lampo)
    }

    // Tulostetaan vastaus
    console.log(result.toFixed(1));
    updateresult(result);

}

function FC(F){
    let C = (F - 32) / 1.8;
    return C;
}

function CF(C){
    let F = C * 1.8 + 32;
    return F;
}

function FK(F){
    let K = (F + 459.67) / 1.8;
    return K;
}

function KF(K){
    let F = K * 1.8 - 459.67;
    return F;
}

function KC(K){
    let C = K - 273.15
    return C;
}

function CK(C){
    let K = C + 273.15
    return K;
}

function updateresult(result){
    result = result.toFixed(document.forms['des_form']['des'].value);
    document.getElementById('vastaus').innerHTML = result;
}
