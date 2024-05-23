# Individuell examination: Strajk bowling

## Bakgrund

Strajk bowling är en nyöppnad bowlinghall i centrala Bromölla. Ägaren K. Ägla gillar tekniska lösningar och har tillsammans med brorsonen Keso Ägla byggt denna webbapp.
Herr Ägla är väldigt nöjd med appen men vill försäkra sig om att den är fortsatt stabil när ny funktionalitet läggs till framöver. Ditt uppdrag är att skriva unit tester med React testing library som sen kan köras för att testa av all funktionalitet när man gör en push till Github.

Du hittar de user stories som har implementerats nedan och som de ska skrivas tester för. Du behöver dock skriva acceptanskriterier för varje user story.

## User stories

Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.

Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.

Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.

Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

Som användare vill jag kunna navigera tillbaka till bokningsvyn efter bekräftelse.

## AcceptansKriterier

Valt datum, tid, antal spelare och antal banor från BookingInfo Inputs skall synas i Confirmation och skickas till API.

Input för skostorlek existerar och value skickas till API.
Om antalet personer inte matchar antalet skor ges Error.

- Knapp skapas för varje sko, klick tar bort den från listan, om antalet personer inte matchar antalet skor ges Error.

Bokningsknapp "STRIIIIIIIIIIIIIKE" vid klick skickar Input.value och navigerar till Confirmation ifall inga Error. 
Totalsumma beräknas person.value*120 + lanes.value*100 och visas på Confirmation sida.

Confirmation sida innehåller knapp "SWEET, LET'S GO" som navigerar till Booking.

## Bibliotek ni behöver

Följande bibliotek behöver ni installera för denna examination:

- `npm install vitest --save-dev`
- `npm install jsdom --save-dev`
- `npm install @testing-library/react @testing-library/jest-dom --save-dev`
- `npm install msw --save-dev`

## Betygskriterier

**Får godkänt ska du:**

- Gjort acceptanskriterier till varje user story som sedan blir testfall. (Hur många acceptanskriterier till varje story är svårt att säga utan det gäller att hitta en bra balans, diskutera gärna med mig här). Du kan skriva acceptanskriterierna i README:n för ditt Githubrepo.
- Gjort tester i React testing library för alla user stories som går grönt när man kör dessa.
- Mockat POST-anrop med Mock service worker.
- Alla tester finns representerade i acceptanskriterierna.
- Testerna triggas via en Github actions på main-branchen. Det bör alltså finnas en grön bock i ditt Github repo när du lämnar in examinationen.

**Får Väl Godkänt ska du:**

- Har gjort acceptanskriterier samt tester för felhantering.
  *  Att en bokning inte går att göras om alla fält inte är ifyllda.
  *  Att en bokning inte går att göra ifall antal skor inte matchas mot antal spelare
  *  Att en bokning inte går att föra ifall antalet spelare inte stämmer gentemot antalet banor (max 4 spelare per bana)
    

## Inlämning

Lämna in länk till Githubrepo med koden (inklusive tester) och acceptanskriterier (i README) på Learnpoint senast **fredagen 5/31 kl 23:59**.
