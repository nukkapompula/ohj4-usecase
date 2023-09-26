# Äänestyssovelluksen käyttötapauskuvaukset
Alla luetellut toiminnot kuvaavat sovelluksen erilaisia käyttötapauksia pääosin kronologisessa järjestyksessä.

## Luo profiili
Äänestyssovellusta ei pääse hyödyntämään ilman käyttäjäprofiilia, joten sellaisen luomisprosessi laukaistaan tällä painikkeella. Käyttäjä valitsee ensin roolikseen joko "Ylläpitäjän" tai "Äänestäjän". Sitten hän kirjoittaa haluamansa käyttäjänimen sekä salasanan. Käyttäjälle annetaan virheilmoitus, mikäli annetut tiedot eivät täytä seuraavia ehtoja:

- käyttäjänimi on vapaa
- käyttäjänimi ei ole tyhjä merkkijono, sisällä välilyöntejä tai puolipisteitä
- salasanan pituus on vähintään 5 merkkiä eikä sisällä puolipisteitä.

Kun edellä mainitut seikat ovat kunnossa, luodaan tietojen mukainen käyttäjäprofiili.

## Kirjaudu sisään
Esiehtona sisäänkirjautumiseen on olemassaoleva käyttäjäprofiili. Tällä painikkeella saadaan esiin ruutu, jonne syötetään haluttu käyttäjänimi sekä ko. profiilin salasana. Kirjautuminen epäonnistuu jos:

- syötettyä käyttäjänimeä ei ole olemassa tai se on tyhjä merkkijono
- salasana on väärä tai se on tyhjä merkkijono.

Onnistunut kirjautuminen määrää käyttäjän mahdolliset toiminnot sovelluksessa hänen profiililleen valitsemansa roolin (Ylläpitäjä/Äänestäjä) mukaan. Niiden lisäksi molemmat käyttäjätyypit voivat myös toki kirjautua ulos ollessaan profiilinsa etusivulla.

## Kirjaudu ulos
Tämä vaatii onnistuneen sisäänkirjautumisen käyttäjäprofiililla. Kun käyttäjä kirjautuu ulos, hän pääsee sovelluksen alkuruutuun jossa pystyy joko luomaan profiilin tai kirjautumaan sisään.

## Luo äänestys
Esiehtona tälle tapaukselle on onnistunut sisäänkirjautuminen "Ylläpitäjä"-roolisella käyttäjällä. Äänestyksen luomisen laukaisee yksinkertainen painike, jonka jälkeen ylläpitäjä antaa äänestykselleen nimen sekä päättää vaihtoehdot äänestäjille; äänestykset ovat joko-tai-tyyppisiä. Äänestys avataan jos...

- äänestyksen nimi ei ole tyhjä merkkijono tai sisällä puolipisteitä
- äänestyksen nimi on vapaa (käyttäjällä itsellään ei ole olemassa samannimistä äänestystä).

Tietojen puutteista ilmoitetaan käyttäjälle.

## Poista äänestys
Kuten "Luo äänestys", tämäkin toimenpide vaatii sisäänkirjautumisen ylläpitäjänä. Lisäksi käyttäjän on täytynyt luoda vähintään yksi äänestys ennen kuin "Poista äänestys"-painike tulee näkyviin. Käyttäjä kykenee poistamaan vain itse avaamiaan äänestyksiä.

## Selaa äänestyksiä
Esiehtona tälle tapaukselle on onnistunut sisäänkirjautuminen "Äänestäjä"-roolisella käyttäjällä. Käyttäjä näkee täällä kaikki ylläpitäjien avaamat aktiiviset äänestykset. Halutessaan hän voi valita äänestyksen, jolloin siirrytään käyttötapaukseen "Valitse äänestys".

## Valitse äänestys
Tänne päädytään vain tapauksen "Selaa äänestyksiä" jälkeen, halutun äänestyksen valikoiduttua. Käyttäjä näkee valitun äänestyksen tilanteen (kuinka paljon kukin vaihtoehto on kerännyt ääniä) ja äänestyksen avaajan nimimerkin. Halutessaan käyttäjä voi myös äänestää yhtä vaihtoehdoista ja siten vaikuttaa tilanteeseen.