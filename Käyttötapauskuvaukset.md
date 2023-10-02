# Mylwintäänestyksen käyttötapauskuvaukset
Alla luetellut toiminnot kuvaavat sovelluksen erilaisia käyttötapauksia pääosin kronologisessa järjestyksessä.

## Luo uusi käyttäjä
Sovellusta ei pääse hyödyntämään ilman käyttäjätiliä, joten sellaisen luomisprosessi laukaistaan tällä painikkeella sovelluksen aloitussivulla. Käyttäjä valitsee ensin roolikseen joko "Ylläpitäjän" tai "Äänestäjän". Sitten hän kirjoittaa haluamansa käyttäjänimen sekä salasanan. Käyttäjälle annetaan virheilmoitus, mikäli annetut tiedot eivät täytä seuraavia ehtoja:

- käyttäjänimi on vapaa
- käyttäjänimi ei sisällä välilyöntejä, puolipisteitä tai merkkejä & * ¤
- nimi ei ole tyhjä tai ylitä 20 merkkiä
- salasanan pituus on vähintään 5 merkkiä eikä sisällä puolipisteitä.

Kun edellä mainitut seikat ovat kunnossa, luodaan tietojen mukainen käyttäjätili.

## Kirjaudu sisään
Käyttötapauksen "Luo uusi käyttäjä" tapaan tämäkin painike löytyy aloitussivulta. Käyttäjä syöttää kenttiin käyttäjänimen sekä siihen yhdistetyn salasanan. Kirjautuminen epäonnistuu jos:

- syötettyä käyttäjänimeä ei ole olemassa tai se on tyhjä merkkijono
- salasana on väärä tai se on tyhjä merkkijono.

Onnistunut kirjautuminen avaa käyttäjälle toimintoja riippuen hänen roolistaan (Ylläpitäjä/Äänestäjä). Molemmat käyttäjätyypit voivat myös toki kirjautua ulos ollessaan etusivulla.

## Kirjaudu ulos
Tämä vaatii onnistuneen sisäänkirjautumisen. Kun käyttäjä kirjautuu ulos, hän pääsee sovelluksen alkuruutuun jossa pystyy joko luomaan uuden tilin tai kirjautumaan olemassaolevalla sisään.

## Luo uusi äänestys
Esiehtona tälle tapaukselle on onnistunut sisäänkirjautuminen "Ylläpitäjä"-roolisella tilillä. Ylläpitäjä antaa äänestykselleen nimen sekä päättää vaihtoehdot äänestäjille; äänestykset ovat joko-tai-tyyppisiä. Äänestys avataan jos...

- äänestyksen nimi ei ole tyhjä merkkijono, sisällä puolipisteitä tai merkkejä & * | ¤
- äänestyksen nimi ei ylitä 30 merkkiä
- äänestyksen nimi on vapaa (käyttäjällä itsellään ei ole olemassa samannimistä äänestystä)
- asetetut ehdokkaat eivät ole tyhjiä merkkijonoja, ylitä 20 merkkiä tai sisällä puolipisteitä
- asetetut ehdokkaat eivät ole samannimisiä.

Tietojen puutteellisuudesta ilmoitetaan käyttäjälle.

Jos/kun muut ovat äänestäneet, ylläpitäjä näkee kunkin äänestäjän kannan asiaan pitämällä osoitinta äänestyksen kohdalla.

## Poista äänestys
Kuten "Luo uusi äänestys", tämäkin toimenpide vaatii sisäänkirjautumisen ylläpitäjänä. Käyttäjä kykenee poistamaan vain itse avaamiaan äänestyksiä. Äänestys pyyhitään kun ylläpitäjä klikkaa sitä omalla etusivullaan.

## Selaa äänestyksiä
Esiehtona tälle tapaukselle on onnistunut sisäänkirjautuminen "Äänestäjä"-roolisella tilillä. Käyttäjä näkee täällä etusivullaan kaikki ylläpitäjien avaamat aktiiviset äänestykset ja pitämällä osoitinta äänestyksen kohdalla hän saa tiedon, onko hän jo vaikuttanut ko. äänestystulokseen. Halutessaan hän voi klikkaamalla valita äänestyksen, jolloin siirrytään käyttötapaukseen "Valitse äänestys".

## Valitse äänestys
Tänne päädytään vain tapauksen "Selaa äänestyksiä" jälkeen, halutun äänestyksen valikoiduttua. Käyttäjä näkee valitun äänestyksen tilanteen (kuinka paljon vaihtoehdot ovat keränneet ääniä). Käyttäjä voi äänestää yhtä vaihtoehdoista ja siten vaikuttaa tilanteeseen. Kun ääni on annettu, ei käyttäjä kykene enää muuttamaan kantaansa ko. äänestyksessä.