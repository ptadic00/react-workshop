# React workshop specifikacija
 

## Funkcionalni zahtjevi
Cilj je napraviti aplikaciju koja će korisnicima omogućiti pretraživanje i označavanje njihovih omiljenih dobartek.hr restorana.

- Za dohvaćanje podataka koristiti `/restaurants/search` API endpoint opisan u [Dobartek API dokumentaciji](./API_SPECS.md).
  
- Ne bi trebao postojati botun za pokretanje pretraživanja, umjesto toga trebalo bi pokrenuti pretraživanje i prikazati rezultate dok korisnik tipka u input za pretragu

- Korisnik može označiti restoran kao omiljeni
  
- Označeni restorani se trebaju spremiti u `localstorage` i biti prikazani kada korisnik nema ništa upisano u input za pretragu restorana

## Tko želi više

- Napraviti novu stranicu gdje će biti prikazani svi restorani
- Napraviti navigacijsku traku preko koje se može navigirati na novu stranicu
- Za dohvaćanje podataka koristiti `/restaurants` API endpoint opisan u [Dobartek API dokumentaciji](./API_SPECS.md)
- Na ekranu se treba prikazati maksimalno 10 restorana
- Napraviti client-side paginaciju kako bi korisniku omogućili navigaciju kroz sve rezultate

## Ostali zahtjevi
- Kao osnovu za React aplikaciju koristite Create React App
- Styling bi trebao biti napisan ispočetka
- Potrebno je da svi elementi rade u svim modernim browserima