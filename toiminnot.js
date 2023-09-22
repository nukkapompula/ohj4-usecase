var kirjautunut = null;

function kirjauduSisaan(){
    document.getElementById("info").innerHTML = "";
    let nimi = document.getElementById("kayttajaNimi").value;
    let sana = document.getElementById("salasana").value;
    let tallennettuNimi = localStorage.getItem(nimi);
    let tallennettuSana = localStorage.getItem(`${nimi}#sana`);
    if(tallennettuNimi != nimi){
        document.getElementById("info").innerHTML = "Käyttäjää ei löydy!";
        document.getElementById("kayttajaNimi").value = "";
    } else if(tallennettuSana != sana){
        document.getElementById("info").innerHTML = "Väärä salasana!";
        document.getElementById("salasana").value = "";
    } else if(localStorage.getItem(`${nimi}#rooli`) == "aanestaja"){
        kirjautunut = nimi;
        document.getElementById("kayttajaNimi").value = "";
        document.getElementById("salasana").value = "";
        document.getElementById("aanestajanEtusivu").style.display = "block";
        document.getElementById("etusivu").style.display = "none";
        document.getElementById("info").innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Äänestäjä.`;
    } else {
        kirjautunut = nimi;
        document.getElementById("kayttajaNimi").value = "";
        document.getElementById("salasana").value = "";
        document.getElementById("yllapitajanEtusivu").style.display = "block";
        document.getElementById("etusivu").style.display = "none";
        document.getElementById("info").innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Ylläpitäjä.`;
    }
}

function luoKayttaja(){
    document.getElementById("kayttajanLuominen").style.display = "block";
    document.getElementById("etusivu").style.display = "none";
    document.getElementById("info").innerHTML = "";
}

function vahvista(){
    let rooli = document.getElementById("rooli").value;
    let nimi = document.getElementById("uusiKayttajaNimi").value;
    let sana = document.getElementById("uusiSalasana").value;
    if(nimi.length == 0 || nimi.includes(" ")){
        document.getElementById("info").innerHTML = "Syötä ruutuun haluamasi käyttäjänimi. Älä käytä välilyöntejä.";
        document.getElementById("uusiKayttajaNimi").value = "";
    } else if(localStorage.getItem(nimi) == nimi){
        document.getElementById("info").innerHTML = "Käyttäjänimi ei ole vapaa."
        document.getElementById("uusiKayttajaNimi").value = "";
    } else if(sana.length < 5){
        document.getElementById("info").innerHTML = "Salasanassa tulee olla vähintään 5 merkkiä."
        document.getElementById("uusiSalasana").value = "";
    } else {
        localStorage.setItem(nimi + "#rooli", rooli);
        localStorage.setItem(nimi, nimi);
        localStorage.setItem(nimi + "#sana", sana);
        document.getElementById("etusivu").style.display = "block";
        document.getElementById("kayttajanLuominen").style.display = "none";
        document.getElementById("info").innerHTML = `Käyttäjä ${nimi} luotu!`;
        document.getElementById("uusiKayttajaNimi").value = "";
        document.getElementById("uusiSalasana").value = "";
    }
}

function peruuta(){
    document.getElementById("etusivu").style.display = "block";
    document.getElementById("kayttajanLuominen").style.display = "none";
}

function testiTyhjennys(){
    localStorage.clear();
}

function kirjauduUlos(){
    document.getElementById("info").innerHTML = `${kirjautunut} kirjattu ulos, näkemiin!`;
    kirjautunut = null;
    document.getElementById("etusivu").style.display = "block";
    document.getElementById("aanestajanEtusivu").style.display = "none";
    document.getElementById("yllapitajanEtusivu").style.display = "none";
}