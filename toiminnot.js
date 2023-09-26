var kirjautunut = null;
var inforuutu = document.getElementById("info");

// testiylläpitäjä
localStorage.setItem("a", "a");
localStorage.setItem("a" + ";rooli", "yllapitaja");
localStorage.setItem("a" + ";sana", "a");

// testiäänestäjä
localStorage.setItem("b", "b");
localStorage.setItem("b" + ";rooli", "aanestaja");
localStorage.setItem("b" + ";sana", "b");

function kirjauduSisaan(){
    inforuutu.innerHTML = "";
    let nimi = document.getElementById("kayttajaNimi").value;
    let sana = document.getElementById("salasana").value;
    let tallennettuNimi = localStorage.getItem(nimi);
    let tallennettuSana = localStorage.getItem(`${nimi};sana`);
    if(tallennettuNimi != nimi){
        inforuutu.innerHTML = "Käyttäjää ei löydy!";
        document.getElementById("kayttajaNimi").value = "";
    } else if(tallennettuSana != sana){
        inforuutu.innerHTML = "Väärä salasana!";
        document.getElementById("salasana").value = "";
    } else if(localStorage.getItem(`${nimi};rooli`) == "aanestaja"){
        kirjautunut = nimi;
        document.getElementById("kayttajaNimi").value = "";
        document.getElementById("salasana").value = "";
        document.getElementById("aanestajanEtusivu").style.display = "block";
        document.getElementById("etusivu").style.display = "none";
        inforuutu.innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Äänestäjä.`;
    } else {
        kirjautunut = nimi;
        document.getElementById("kayttajaNimi").value = "";
        document.getElementById("salasana").value = "";
        document.getElementById("yllapitajanEtusivu").style.display = "block";
        document.getElementById("etusivu").style.display = "none";
        inforuutu.innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Ylläpitäjä.`;
    }
}

function luoKayttaja(){
    document.getElementById("kayttajanLuominen").style.display = "block";
    document.getElementById("etusivu").style.display = "none";
    inforuutu.innerHTML = "";
}

function vahvistaKayttaja(){
    let rooli = document.getElementById("rooli").value;
    let nimi = document.getElementById("uusiKayttajaNimi").value;
    let sana = document.getElementById("uusiSalasana").value;
    if(nimi.length == 0 || nimi.includes(" ") || nimi.includes(";")){
        inforuutu.innerHTML = "Syötä ruutuun haluamasi käyttäjänimi. Älä käytä välilyöntiä tai puolipistettä.";
        document.getElementById("uusiKayttajaNimi").value = "";
    } else if(localStorage.getItem(nimi) == nimi){
        inforuutu.innerHTML = "Käyttäjänimi ei ole vapaa."
        document.getElementById("uusiKayttajaNimi").value = "";
    } else if(sana.length < 5 || sana.includes(";")){
        inforuutu.innerHTML = "Salasanassa tulee olla vähintään 5 merkkiä eikä se saa sisältää puolipisteitä."
        document.getElementById("uusiSalasana").value = "";
    } else {
        localStorage.setItem(nimi, nimi);
        localStorage.setItem(nimi + ";rooli", rooli);
        localStorage.setItem(nimi + ";sana", sana);
        document.getElementById("etusivu").style.display = "block";
        document.getElementById("kayttajanLuominen").style.display = "none";
        inforuutu.innerHTML = `Käyttäjä ${nimi} luotu!`;
        document.getElementById("uusiKayttajaNimi").value = "";
        document.getElementById("uusiSalasana").value = "";
    }
}

function peruutaAlkuun(){
    document.getElementById("etusivu").style.display = "block";
    document.getElementById("kayttajanLuominen").style.display = "none";
}

function testiTyhjennys(){
    localStorage.clear();
}

function testiIterointi(){
    for(i=0; i<localStorage.length; i++){
        console.log(localStorage.key(i));
    }
}

function kirjauduUlos(){
    inforuutu.innerHTML = `${kirjautunut} kirjattu ulos, näkemiin!`;
    kirjautunut = null;
    document.getElementById("etusivu").style.display = "block";
    document.getElementById("aanestajanEtusivu").style.display = "none";
    document.getElementById("yllapitajanEtusivu").style.display = "none";
}

function luoAanestys(){
    document.getElementById("aanestyksenLuominen").style.display = "block";
    document.getElementById("yllapitajanEtusivu").style.display = "none";
}

function peruutaEtusivulle(){
    if(localStorage.getItem(`${kirjautunut};rooli`) == "yllapitaja"){
        document.getElementById("yllapitajanEtusivu").style.display = "block";
        document.getElementById("aanestyksenLuominen").style.display = "none";
        document.getElementById("uusiAanestysNimi").value = "";
        document.getElementById("uusiEhdokas1").value = "";
        document.getElementById("uusiEhdokas2").value = "";
    }
}

function vahvistaAanestys(){
    let aihe = document.getElementById("uusiAanestysNimi").value;
    let ehdokas1 = document.getElementById("uusiEhdokas1").value;
    let ehdokas2 = document.getElementById("uusiEhdokas2").value;
    if(aihe.length == 0 || aihe.includes(";")){
        inforuutu.innerHTML = "Nimi ei voi olla tyhjä tai sisältää puolipisteitä.";
        document.getElementById("uusiAanestysNimi").value = "";
    } else if(`${kirjautunut};${aihe}` in localStorage){
        inforuutu.innerHTML = "Olet jo luonut samannimisen äänestyksen.";
        document.getElementById("uusiAanestysNimi").value = "";
    } else if(ehdokas1.length == 0 || ehdokas1.includes(";")){
        inforuutu.innerHTML = "Nimeä ehdokkaat, mutta älä käytä puolipistettä.";
        document.getElementById("uusiEhdokas1").value = "";
    } else if(ehdokas2.length == 0 || ehdokas2.includes(";")){
        inforuutu.innerHTML = "Nimeä ehdokkaat, mutta älä käytä puolipistettä.";
        document.getElementById("uusiEhdokas2").value = "";
    } else {
        localStorage.setItem(kirjautunut + ";" + aihe, ehdokas1 + ";" + "0" + ";" + ehdokas2 + ";" + "0");
        document.getElementById("aanestyksenLuominen").style.display = "none";
        document.getElementById("yllapitajanEtusivu").style.display = "block";
        inforuutu.innerHTML = `Äänestys aiheesta "${aihe}" luotu!`;
        document.getElementById("uusiAanestysNimi").value = "";
        document.getElementById("uusiEhdokas1").value = "";
        document.getElementById("uusiEhdokas2").value = "";
    }
}

function paivitaAanestykset(){
    
}