function kirjauduSisaan(){
    let nimi = document.getElementById("kayttajaNimi").value;
    let sana = document.getElementById("salasana").value;
    if(nimi.length == 0 || nimi.includes(" ")){
        window.alert("Syötä ruutuun käyttäjänimesi.");
        document.getElementById("kayttajaNimi").value = "";
    } else if(sana.length == 0){
        window.alert("Salasana on väärä!")
        document.getElementById("salasana").value = "";
    }
}

function luoKayttaja(){
    document.getElementById("kayttajanLuominen").style.display = "block";
    document.getElementById("etusivu").style.display = "none";
}

function vahvista(){
    let rooli = document.getElementById("rooli").value;
    let nimi = document.getElementById("uusiKayttajaNimi").value;
    let sana = document.getElementById("uusiSalasana").value;
    if(nimi.length == 0 || nimi.includes(" ")){
        window.alert("Syötä ruutuun haluamasi käyttäjänimi. Älä käytä välilyöntejä.");
        document.getElementById("uusiKayttajaNimi").value = "";
    } else if(sana.length < 5){
        window.alert("Salasanassa tulee olla vähintään 5 merkkiä.");
        document.getElementById("uusiSalasana").value = "";
    } else {
        // muuta "session" "localiksi" lopuksi
        window.sessionStorage.setItem(nimi + "#rooli", rooli);
        window.sessionStorage.setItem(nimi, nimi);
        window.sessionStorage.setItem(nimi + "#sana", sana);
        document.getElementById("kayttajaVahvistettu").style.display = "block";
        document.getElementById("kayttajanLuominen").style.display = "none";
        document.getElementById("vahvistusTeksti").innerHTML = `Käyttäjä ${nimi} luotu!`;
        document.getElementById("uusiKayttajaNimi").value = "";
        document.getElementById("uusiSalasana").value = "";
    }
}

function peruuta(){
    document.getElementById("etusivu").style.display = "block";
    document.getElementById("kayttajanLuominen").style.display = "none";
    document.getElementById("kayttajaVahvistettu").style.display = "none";
}