# Äänestyssovelluksen käyttötapauskuvaukset
Sovelluksessa on tavallisia käyttäjiä sekä ylläpitäjiä. Tapaukset alla kuvaavat sovelluksen toimintaa
erilaisissa käyttötapauksissa pääosin kronologisessa järjestyksessä.
## Luo profiili
Äänestyssovellusta ei pääse hyödyntämään ilman käyttäjäprofiilia, joten sellaisen luomisprosessi laukaistaan tällä painikkeella. Käyttäjä valitsee ensin roolikseen joko "Ylläpitäjän" tai "Äänestäjän". Sitten hän kirjoittaa haluamansa käyttäjänimen sekä salasanan. Käyttäjälle annetaan virheilmoitus, mikäli annetut tiedot eivät täytä seuraavia ehtoja:

- käyttäjänimi on vapaa
- käyttäjänimi ei ole tyhjä merkkijono
- salasanan pituus on vähintään 5 merkkiä

Jos edellä mainitut seikat ovat kunnossa, luodaan tietojen mukainen käyttäjäprofiili.
## Kirjaudu sisään
Esiehtona sisäänkirjautumiseen on olemassaoleva käyttäjäprofiili.
## Luo äänestys
Esiehtona tälle tapaukselle on onnistunut sisäänkirjautuminen ylläpitäjänä. Äänestyksen luomisen laukaisee yksinkertainen painike, jonka jälkeen ylläpitäjä antaa äänestykselleen nimen, kirjoittaa kuvauksen sekä lisää vaihtoehdot äänestäjille.