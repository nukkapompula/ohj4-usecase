var kirjautunut = null;

function kirjauduSisaan(){
    let nimi = document.getElementById("kayttajaNimi").value;
    let sana = document.getElementById("salasana").value;
    let tallennettuNimi = sessionStorage.getItem(nimi);
    let tallennettuSana = sessionStorage.getItem(`${nimi}#sana`);
    if(tallennettuNimi != nimi){
        window.alert("Käyttäjää ei löydy!");
        document.getElementById("kayttajaNimi").value = "";
    } else if(tallennettuSana != sana){
        window.alert("Väärä salasana!");
        document.getElementById("salasana").value = "";
    } else if(sessionStorage.getItem(`${nimi}#rooli`) == "aanestaja"){
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
        sessionStorage.setItem(nimi + "#rooli", rooli);
        sessionStorage.setItem(nimi, nimi);
        sessionStorage.setItem(nimi + "#sana", sana);
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

function testiTyhjennys(){
    sessionStorage.clear();
}

function kirjauduUlos(){
    document.getElementById("info").innerHTML = `${kirjautunut} kirjattu ulos, näkemiin!`;
    kirjautunut = null;
    document.getElementById("etusivu").style.display = "block";
    document.getElementById("aanestajanEtusivu").style.display = "none";
    document.getElementById("yllapitajanEtusivu").style.display = "none";
}