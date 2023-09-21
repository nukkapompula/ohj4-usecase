function kirjauduSisaan(){
    let nimi = document.getElementById("kayttajaNimi").value;
    let sana = document.getElementById("salasana").value;
    if(nimi.length == 0){
        window.alert("Syötä ruutuun käyttäjänimesi.");
        document.getElementById("kayttajaNimi").value = "";
    }
    if(sana.length == 0){
        window.alert("Salasana on väärä!")
        document.getElementById("salasana").value = "";
    }
}

function luoKayttaja(){
    document.getElementById("kayttajanLuominen").style.display = "block";
    document.getElementById("etusivu").style.display = "none";
}

function vahvista(){
    console.log("joo-o");
}