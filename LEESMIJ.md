# Verzekeringen overzicht – met Google-login

Versie 1.2 (29-10-2026): wijzigen, toevoegen en verwijderen in de pagina. Knop Back-up.
Versie 1.1 (29-10-2026): versienummer + knop volledig scherm.

## Bestanden
- `index.html` – de pagina (zonder gegevens)
- `firebase-config.js` – hier plak je je Firebase-gegevens
- `firestore.rules` – wie mag lezen en schrijven
- `data.json` – je gegevens. **NIET op GitHub zetten!**
- `.gitignore` – zorgt dat data.json niet op GitHub komt

## Stap 1 – Firebase project
1. Ga naar https://console.firebase.google.com en klik **Project toevoegen**.
2. Klik op **</>** (Web-app toevoegen). Kopieer de "firebaseConfig".
3. Plak die in `firebase-config.js`.

## Stap 2 – Google-login aanzetten
1. Menu **Authentication** → **Aan de slag**.
2. Tabblad **Sign-in method** → **Google** → aanzetten → opslaan.
3. Tabblad **Settings** → **Authorized domains** → voeg toe: `JOUWNAAM.github.io`

## Stap 3 – Firestore database
1. Menu **Firestore Database** → **Database maken** → locatie `eur3 (europe-west)`.
2. Kies **Productiemodus**.
3. Tabblad **Regels**: plak de inhoud van `firestore.rules` → **Publiceren**.
4. Wil je iemand toegang geven? Zet het e-mailadres in de lijst en publiceer opnieuw.

## Stap 4 – GitHub
1. Maak een repository en upload: `index.html`, `firebase-config.js`, `.gitignore`.
2. **Settings** → **Pages** → Branch `main` → **Save**.
3. Je site: `https://JOUWNAAM.github.io/REPONAAM/`

## Stap 5 – Gegevens uploaden
1. Open je site en log in met Google.
2. Klik bovenaan **Gegevens bijwerken** en kies `data.json`.
3. Klaar. Bewaar data.json daarna op je eigen computer, of verwijder het.

## Lokaal testen
Dubbelklikken werkt niet bij Google-login. Doe dit in de map:
`python -m http.server 8000` en open http://localhost:8000

## Wijzigen, toevoegen, verwijderen (vanaf v1.2)
1. Log in en klik bovenaan op **✏️ Bewerken**.
2. Bij elke regel zie je ✏️ (wijzigen) en 🗑️ (verwijderen).
3. Met **+ Toevoegen** maak je een nieuwe regel.
4. Klaar? Klik op **✔ Klaar**.
- Alles wordt meteen opgeslagen in Firestore.
- Onderaan de pagina zie je wie het laatst iets heeft gewijzigd.

## Wie mag wijzigen?
- Zet het e-mailadres in `firestore.rules` bij **magSchrijven** (en publiceer).
- Zet het ook in `firebase-config.js` bij **beheerders**. Dan ziet die persoon de knoppen.

## Back-up
- Klik op **⬇ Back-up**. Je krijgt een bestand met alle gegevens.
- Doe dit af en toe. Bewaar het op je computer, niet op GitHub.
- **⬆ Importeren** vervangt ALLES. Gebruik het alleen om een back-up terug te zetten.
