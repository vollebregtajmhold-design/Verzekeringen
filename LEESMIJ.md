# Verzekeringen overzicht – met Google-login

Versie 1.27 (30-10-2026): bestanden uploaden in de app (Firebase Storage), knop 📎.
Versie 1.26 (30-10-2026): knop Polisdocument (overzicht zoals de polis, afdrukken of PDF); velden Premie per 1000 en Dekking.
Versie 1.25 (30-10-2026): document-knoppen rechts in de kolom.
Versie 1.24 (30-10-2026): klik op een locatie klapt de afdelingen horizontaal uit; keuze Aantal.
Versie 1.23 (30-10-2026): schakelaar Waarde | Stuksprijs in de totaaltabel.
Versie 1.22 (30-10-2026): tabel Alle objecten weg (alles staat in de totaaltabel en pop-up).
Versie 1.21 (30-10-2026): hoeveelheden uit de totaaltabel; potlood en prullenbak in pop-up alleen bij Bewerken.
Versie 1.20 (30-10-2026): in de pop-up wijzigen, verwijderen en toevoegen.
Versie 1.19 (30-10-2026): klik op een soort in de totaaltabel klapt de objecten uit (schakelaar weg).
Versie 1.18 (30-10-2026): pop-up opent helemaal open; klik op object of "Per object" zet objecten bij elkaar met afdelingen eronder.
Versie 1.17 (30-10-2026): pop-up toont ook aantal, eenheid en prijs.
Versie 1.16 (30-10-2026): totaaltabel per soort óf per object (met hoeveelheden).
Versie 1.15 (30-10-2026): tabblad Bezittingen heet nu Kassen.
Versie 1.14 (29-10-2026): pop-up ook met rechtermuisknop; klik buiten pop-up sluit hem; geel wordt lichtblauw.
Versie 1.13 (29-10-2026): pop-up in- en uitklappen (locatie → afdeling → objecten).
Versie 1.12 (29-10-2026): pop-up compacter, afdeling vooraan.
Versie 1.11 (29-10-2026): klik op een bedrag in de totaaltabel voor details.
Versie 1.10 (29-10-2026): Alle objecten in lagen: locatie → afdeling → objecten.
Versie 1.9 (29-10-2026): groepen bij Alle objecten in- en uitklappen.
Versie 1.8 (29-10-2026): filter Afdeling + tabel totaal per soort en afdeling.
Versie 1.7 (29-10-2026): totaalblokken bij Bezittingen weg.
Versie 1.6 (29-10-2026): tabblad Contacten (telefoon, e-mail, website, klantportaal).
Versie 1.5 (29-10-2026): knop Importeren weg; onderaan "Back-up terugzetten".
Versie 1.4 (29-10-2026): rustiger lettertype (Arial), minder vet.
Versie 1.3 (29-10-2026): eigen icoon, installeren als app.
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
- Onderaan de pagina staat **Back-up terugzetten**. Dat vervangt ALLES. Alleen gebruiken als het misgaat.

## Bestanden uploaden (vanaf v1.27)
Eenmalig instellen in Firebase:
1. Klik links onderaan op **Upgrade** en kies **Blaze** (creditcard nodig). Tot 5 GB opslag is gratis.
2. Zet een **budgetmelding** van bijvoorbeeld € 1 (Google Cloud → Billing → Budgets & alerts).
3. Menu **Databases & Storage → Storage → Get started**. Kies een locatie in Europa.
4. Tabblad **Rules**: plak de inhoud van `storage.rules` → **Publish**.

Gebruiken:
- Klik **✏️ Bewerken** → bij een regel **📎 +** → **⬆ Bestand uploaden**.
- Een regel met bestanden heeft een groen knopje **📎 1** (aantal). Klik erop om te openen.
- Max. 25 MB per bestand.

## Iemand toegang geven (bijv. je verzekeraar)
Zet het e-mailadres (Google-account) bij **magLezen** in BEIDE regels:
- `firestore.rules` (Firestore → Rules → Publish)
- `storage.rules` (Storage → Rules → Publish)
De persoon logt in met Google op de website.
