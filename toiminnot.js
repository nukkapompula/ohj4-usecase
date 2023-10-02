var kirjautunut = null;
var inforuutu = document.getElementById("info");
var avaaja = null;

/*
Käyttäjätiedoissa "&" merkitsee roolia, "*" salasanaa ja "¤" käytettyä äänestysoikeutta.
Tiedot tallennetaan localStorageen muotoon...
    avain                               arvo
    KÄYTTÄJÄNIMI                        käyttäjänimi
    KÄYTTÄJÄNIMI;&                      "yllapitaja" tai "aanestaja"
    KÄYTTÄJÄNIMI;*                      salasana
    KÄYTTÄJÄNIMI;ÄÄNESTYKSEN NIMI       ehdokkaan 1 nimi;äänet;ehdokkaan 2 nimi;äänet
    KÄYTTÄJÄNIMI¤ÄÄNESTYKSEN NIMI       äänestetty ehdokas 
*/

// ylläpitäjä poistaa äänestyksiään klikkaamalla
document.getElementById("yllapitajanAanestykset").addEventListener("mousedown", function(event){
    let kohde = event.target.innerHTML;
    let kohdePilkottu = kohde.split(" | ");
    localStorage.removeItem(`${kirjautunut};${kohdePilkottu[0]}`);
    // poistetaan tieto kaikista äänestyksessä äänestäneistä
    for(n=0; n<localStorage.length; n++){
        if(localStorage.key(n).includes(kohdePilkottu[0]) == true){
            localStorage.removeItem(localStorage.key(n));
        }
    }
    inforuutu.innerHTML = `Äänestys <b>${kohdePilkottu[0]}</b> poistettu!`;
    haeAanestykset();
})

// äänestäjä näkee tilanteen äänestystä klikkaamalla
document.getElementById("avatutAanestykset").addEventListener("mousedown", function(event){
    inforuutu.innerHTML = `Moi <b>${kirjautunut}</b>! Olet rooliltasi <b>Äänestäjä</b>.`;
    let kohde = event.target.innerHTML;
    let kohdePilkottu = kohde.split(" | Avaaja: ");
    let rimpsu = localStorage.getItem(`${kohdePilkottu[1]};${kohdePilkottu[0]}`);
    let rimpsuPilkottu = rimpsu.split(";");
    avaaja = kohdePilkottu[1];
    document.getElementById("aanestajanEtusivu").style.display = "none";
    document.getElementById("katsoAanestysta").style.display = "block";
    document.getElementById("aanestyksenAihe").innerHTML = `${kohdePilkottu[0]}`;
    document.getElementById("ehdokas1").innerHTML = `${rimpsuPilkottu[0]} (ääniä: ${rimpsuPilkottu[1]})`;
    document.getElementById("ehdokas2").innerHTML = `${rimpsuPilkottu[2]} (ääniä: ${rimpsuPilkottu[3]})`;
})

// ääni annetaan ehdokasta klikkaamalla, alla ehdokkaan 1 äänestäminen
document.getElementById("ehdokas1").addEventListener("mousedown", function(event){
    let kohde = event.target.innerHTML;
    let kohdePilkottu = kohde.split(" (ääniä: ");
    let aanestys = document.getElementById("aanestyksenAihe").innerHTML;
    let paivitettava = localStorage.getItem(`${avaaja};${aanestys}`);
    let paivitettavaPilkottu = paivitettava.split(";");
    // katsotaan onko käyttäjä jo vaikuttanut tässä äänestyksessä
    if(localStorage.getItem(`${kirjautunut}¤${aanestys}`) == null){
        localStorage.setItem(`${kirjautunut}¤${aanestys}`, kohdePilkottu[0]);
        localStorage.setItem(`${avaaja};${aanestys}`, `${paivitettavaPilkottu[0]};${Number(paivitettavaPilkottu[1]) + 1};${paivitettavaPilkottu[2]};${Number(paivitettavaPilkottu[3]) + 0}`);
        document.getElementById("aanestajanEtusivu").style.display = "block";
        document.getElementById("katsoAanestysta").style.display = "none";
        inforuutu.innerHTML = `Tuit ehdokasta <b>${kohdePilkottu[0]}</b> äänestyksessä <b>${aanestys}</b>!`;
    } else {
        inforuutu.innerHTML = `Höpsö, käytit jo äänesi täällä ehdokkaalle ${localStorage.getItem(`${kirjautunut}¤${aanestys}`)}.`;
    }
    haeAanestykset();
})

document.getElementById("ehdokas2").addEventListener("mousedown", function(event){
    let kohde = event.target.innerHTML;
    let kohdePilkottu = kohde.split(" (ääniä: ");
    let aanestys = document.getElementById("aanestyksenAihe").innerHTML;
    let paivitettava = localStorage.getItem(`${avaaja};${aanestys}`);
    let paivitettavaPilkottu = paivitettava.split(";");
    if(localStorage.getItem(`${kirjautunut}¤${aanestys}`) == null){
        localStorage.setItem(`${kirjautunut}¤${aanestys}`, kohdePilkottu[0]);
        localStorage.setItem(`${avaaja};${aanestys}`, `${paivitettavaPilkottu[0]};${Number(paivitettavaPilkottu[1]) + 0};${paivitettavaPilkottu[2]};${Number(paivitettavaPilkottu[3]) + 1}`);
        document.getElementById("aanestajanEtusivu").style.display = "block";
        document.getElementById("katsoAanestysta").style.display = "none";
        inforuutu.innerHTML = `Tuit ehdokasta ${kohdePilkottu[0]} äänestyksessä ${aanestys}!`;
    } else {
        inforuutu.innerHTML = `Höpsö, käytit jo äänesi täällä ehdokkaalle ${localStorage.getItem(`${kirjautunut}¤${aanestys}`)}.`;
    }
    haeAanestykset();
})

// testiylläpitäjä
localStorage.setItem("a", "a");
localStorage.setItem("a" + ";&", "yllapitaja");
localStorage.setItem("a" + ";*", "a");
// testiäänestäjä
localStorage.setItem("b", "b");
localStorage.setItem("b" + ";&", "aanestaja");
localStorage.setItem("b" + ";*", "b");

function kirjauduSisaan(){
    inforuutu.innerHTML = "Keskustelun polarisoija numero yxi";
    let nimi = document.getElementById("kayttajaNimi").value;
    let sana = document.getElementById("salasana").value;
    let tallennettuNimi = localStorage.getItem(nimi);
    let tallennettuSana = localStorage.getItem(`${nimi};*`);
    if(tallennettuNimi != nimi){
        inforuutu.innerHTML = "Käyttäjää ei löydy!";
        document.getElementById("kayttajaNimi").value = "";
    } else if(tallennettuSana != sana){
        inforuutu.innerHTML = "Väärä salasana!";
        document.getElementById("salasana").value = "";
    } else if(localStorage.getItem(`${nimi};&`) == "aanestaja"){
        kirjautunut = nimi;
        document.getElementById("kayttajaNimi").value = "";
        document.getElementById("salasana").value = "";
        document.getElementById("aanestajanEtusivu").style.display = "block";
        document.getElementById("etusivu").style.display = "none";
        inforuutu.innerHTML = `Moi <b>${kirjautunut}</b>! Olet rooliltasi <b>Äänestäjä</b>.`;
        haeAanestykset();
    } else {
        kirjautunut = nimi;
        document.getElementById("kayttajaNimi").value = "";
        document.getElementById("salasana").value = "";
        document.getElementById("yllapitajanEtusivu").style.display = "block";
        document.getElementById("etusivu").style.display = "none";
        inforuutu.innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Ylläpitäjä.`;
        haeAanestykset();
    }
}

function luoKayttaja(){
    document.getElementById("kayttajanLuominen").style.display = "block";
    document.getElementById("etusivu").style.display = "none";
    inforuutu.innerHTML = "Keskustelun polarisoija numero yxi";
}

function vahvistaKayttaja(){
    let rooli = document.getElementById("rooli").value;
    let nimi = document.getElementById("uusiKayttajaNimi").value;
    let sana = document.getElementById("uusiSalasana").value;
    if(nimi.length == 0 || nimi.length > 20 || nimi.includes(" ") || nimi.includes(";") || nimi.includes("&") || nimi.includes("*") || nimi.includes("¤")){
        inforuutu.innerHTML = "Syötä ruutuun haluamasi käyttäjänimi. Älä käytä välilyöntiä, puolipistettä, &-, ¤- tai *-merkkejä. Nimen maksimipituus on 20 merkkiä.";
        document.getElementById("uusiKayttajaNimi").value = "";
    } else if(localStorage.getItem(nimi) == nimi){
        inforuutu.innerHTML = "Käyttäjänimi ei ole vapaa."
        document.getElementById("uusiKayttajaNimi").value = "";
    } else if(sana.length < 5 || sana.includes(";")){
        inforuutu.innerHTML = "Salasanassa tulee olla vähintään 5 merkkiä eikä se saa sisältää puolipisteitä."
        document.getElementById("uusiSalasana").value = "";
    } else {
        localStorage.setItem(nimi, nimi);
        localStorage.setItem(nimi + ";&", rooli);
        localStorage.setItem(nimi + ";*", sana);
        document.getElementById("etusivu").style.display = "block";
        document.getElementById("kayttajanLuominen").style.display = "none";
        inforuutu.innerHTML = `Käyttäjä ${nimi} luotu!`;
        document.getElementById("uusiKayttajaNimi").value = "";
        document.getElementById("uusiSalasana").value = "";
    }
}

function peruutaAlkuun(){
    inforuutu.innerHTML = "Keskustelun polarisoija numero yxi";
    document.getElementById("etusivu").style.display = "block";
    document.getElementById("kayttajanLuominen").style.display = "none";
    document.getElementById("uusiKayttajaNimi").value = "";
    document.getElementById("uusiSalasana").value = "";
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
    inforuutu.innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Ylläpitäjä.`;
}

function peruutaEtusivulle(){
    if(localStorage.getItem(`${kirjautunut};&`) == "yllapitaja"){
        document.getElementById("yllapitajanEtusivu").style.display = "block";
        document.getElementById("aanestyksenLuominen").style.display = "none";
        document.getElementById("uusiAanestysNimi").value = "";
        document.getElementById("uusiEhdokas1").value = "";
        document.getElementById("uusiEhdokas2").value = "";
        inforuutu.innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Ylläpitäjä.`;
    } else {
        document.getElementById("aanestajanEtusivu").style.display = "block";
        document.getElementById("katsoAanestysta").style.display = "none";
        inforuutu.innerHTML = `Moi ${kirjautunut}! Olet rooliltasi Äänestäjä.`;
    }
}

function vahvistaAanestys(){
    let aihe = document.getElementById("uusiAanestysNimi").value;
    let ehdokas1 = document.getElementById("uusiEhdokas1").value;
    let ehdokas2 = document.getElementById("uusiEhdokas2").value;
    if(aihe.length == 0 || aihe.length > 30 || aihe.includes(";") || aihe.includes("&") || aihe.includes("*") || aihe.includes("|") || aihe.includes("¤")){
        inforuutu.innerHTML = "Nimen maksimipituus on 30 merkkiä eikä se saa sisältää puolipisteitä, &-, *-, ¤- tai |-merkkejä.";
        document.getElementById("uusiAanestysNimi").value = "";
    } else if(`${kirjautunut};${aihe}` in localStorage){
        inforuutu.innerHTML = "Olet jo luonut samannimisen äänestyksen.";
        document.getElementById("uusiAanestysNimi").value = "";
    } else if(ehdokas1.length == 0 || ehdokas1.length > 20 || ehdokas1.includes(";")){
        inforuutu.innerHTML = "Nimeä ehdokkaat, mutta älä käytä puolipistettä tai ylitä 20 merkkiä. Ehdokkaiden täytyy myös olla erinimiset.";
        document.getElementById("uusiEhdokas1").value = "";
    } else if(ehdokas2.length == 0 || ehdokas2.length > 20 || ehdokas2.includes(";") || ehdokas1 == ehdokas2){
        inforuutu.innerHTML = "Nimeä ehdokkaat, mutta älä käytä puolipistettä tai ylitä 20 merkkiä. Ehdokkaiden täytyy myös olla erinimiset.";
        document.getElementById("uusiEhdokas2").value = "";
    } else {
        localStorage.setItem(kirjautunut + ";" + aihe, ehdokas1 + ";" + "0" + ";" + ehdokas2 + ";" + "0");
        document.getElementById("aanestyksenLuominen").style.display = "none";
        document.getElementById("yllapitajanEtusivu").style.display = "block";
        inforuutu.innerHTML = `Äänestys aiheesta ${aihe} luotu!`;
        document.getElementById("uusiAanestysNimi").value = "";
        document.getElementById("uusiEhdokas1").value = "";
        document.getElementById("uusiEhdokas2").value = "";
        haeAanestykset();
    }
}

function haeAanestykset(){
    // alustetaan käyttäjätyypeille piirrettävät listat
    let yllapitajanLista = document.getElementById("yllapitajanAanestykset");
    while(yllapitajanLista.firstChild){
        yllapitajanLista.removeChild(yllapitajanLista.lastChild);
    }
    let aanestajanLista = document.getElementById("avatutAanestykset");
    while(aanestajanLista.firstChild){
        aanestajanLista.removeChild(aanestajanLista.lastChild);
    }
    for(n=0; n<localStorage.length; n++){
        // ylläpitäjälle näytetään hänen omat äänestyksensä
        if(localStorage.getItem(`${kirjautunut};&`) == "yllapitaja"){
            if(localStorage.key(n).startsWith(kirjautunut) && localStorage.key(n).includes("&") == false 
            && localStorage.key(n).includes("*") == false && localStorage.key(n).includes(";") == true){
                let nimi = localStorage.key(n);
                let nimiPilkottu = nimi.split(";");
                let tilanne = localStorage.getItem(localStorage.key(n));
                let tilannePilkottu = tilanne.split(";")
                let aanestys = document.createElement("button");
                let aanestysRivi = document.createTextNode(`${nimiPilkottu[1]} | ${tilannePilkottu[0]} (ääniä: ${tilannePilkottu[1]}) ↔ ${tilannePilkottu[2]} (ääniä: ${tilannePilkottu[3]})`);
                aanestys.appendChild(aanestysRivi);
                aanestys.title = "";
                aanestys.className = "mx-4 my-3 p-2 bg-warning rounded";
                // tieto äänestäjistä lisätään titleen
                for(i=0; i<localStorage.length; i++){
                    if(localStorage.key(i).includes("¤") && localStorage.key(i).includes(nimiPilkottu[1])){
                        let todistus = localStorage.key(i);
                        let todistusPilkottu = todistus.split("¤");
                        let aanestetty = localStorage.getItem(todistus);
                        aanestys.title += `${todistusPilkottu[0]} äänesti ehdokasta ${aanestetty}\n`;
                    }
                }
                document.getElementById("yllapitajanAanestykset").appendChild(aanestys);
            }
        // äänestäjä näkee ylläpitäjien avaamat äänestykset    
        } else {
            if(localStorage.key(n).includes("&") == false && localStorage.key(n).includes("*") == false
            && localStorage.key(n).includes("¤") == false && localStorage.key(n).includes(";") == true){
                let nimi = localStorage.key(n);
                let nimiPilkottu = nimi.split(";");
                let aanestys = document.createElement("button");
                let aanestysRivi = document.createTextNode(`${nimiPilkottu[1]} | Avaaja: ${nimiPilkottu[0]}`);
                aanestys.appendChild(aanestysRivi);
                aanestys.title = "Tämä on uusi sinulle.";
                aanestys.className = "mx-4 my-3 p-2 bg-warning rounded";
                // tieto äänen käyttämisestä titleen
                for(j=0; j<localStorage.length; j++){
                    if(localStorage.key(j).includes("¤") && localStorage.key(j).includes(kirjautunut) && localStorage.key(j).includes(nimiPilkottu[1])){
                        aanestys.title = "Äänioikeus käytetty!";
                    }
                }
                document.getElementById("avatutAanestykset").appendChild(aanestys);
            }
        }
    }
}