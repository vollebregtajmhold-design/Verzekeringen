// Plak hier de gegevens van je Firebase-project
// (Firebase console → Projectinstellingen → Jouw apps → Web-app → "Config").
// Deze gegevens zijn niet geheim. De beveiliging zit in firestore.rules.
export const firebaseConfig = {
  apiKey: "AIzaSyBSezZEXq4arwrJ7xlE--rv6UIGGavE8GQ",
  authDomain: "verzekeringen-vollebregt.firebaseapp.com",
  projectId: "verzekeringen-vollebregt",
  storageBucket: "verzekeringen-vollebregt.firebasestorage.app",
  messagingSenderId: "294794484301",
  appId: "1:294794484301:web:6413315cc58e7da5f89a04"
};

// Wie ziet de knop "Gegevens bijwerken"? (kleine letters)
// Let op: de echte controle staat in firestore.rules.
export const beheerders = ["vollebregt.ajmhold@gmail.com"];
