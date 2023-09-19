# Äänestyssovelluksen käyttötapauskuvaukset
Tapaukset alla kuvaavat sovelluksen toimintaa erilaisissa käyttötapauksissa pääosin kronologisessa järjestyksessä.

## Luo profiili
Äänestyssovellusta ei pääse hyödyntämään ilman käyttäjäprofiilia, joten sellaisen luomisprosessi laukaistaan tällä painikkeella. Käyttäjä valitsee ensin roolikseen joko "Ylläpitäjän" tai "Äänestäjän". Sitten hän kirjoittaa haluamansa käyttäjänimen sekä salasanan. Käyttäjälle annetaan virheilmoitus, mikäli annetut tiedot eivät täytä seuraavia ehtoja:

- käyttäjänimi on ainutlaatuinen, ts. ei ole jo käytössä
- käyttäjänimi ei ole tyhjä merkkijono
- salasanan pituus on vähintään 5 merkkiä

Kun edellä mainitut seikat ovat kunnossa, luodaan tietojen mukainen käyttäjäprofiili.

## Kirjaudu sisään
Esiehtona sisäänkirjautumiseen on olemassaoleva käyttäjäprofiili. Tällä painikkeella saadaan esiin ruutu, jonne syötetään haluttu käyttäjänimi sekä ko. profiilin salasana. Kirjautuminen epäonnistuu jos:

- syötettyä käyttäjänimeä ei ole olemassa tai se on tyhjä merkkijono
- salasana on väärä tai se on tyhjä merkkijono

Onnistunut kirjautuminen määrää käyttäjän mahdolliset toiminnot sovelluksessa hänen valitsemansa roolin (Ylläpitäjä/Äänestäjä) mukaan.

## Luo äänestys
Esiehtona tälle tapaukselle on onnistunut sisäänkirjautuminen "Ylläpitäjä"-roolisella käyttäjällä. Äänestyksen luomisen laukaisee yksinkertainen painike, jonka jälkeen ylläpitäjä antaa äänestykselleen nimen, kirjoittaa kuvauksen sekä lisää vaihtoehdot äänestäjille.