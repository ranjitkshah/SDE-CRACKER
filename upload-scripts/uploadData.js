const firestoreService = require('firestore-export-import');
const serviceAccount = require('./serviceAccountKey.json');


const databaseURL="https://sde-sheet.firebaseio.com"
firestoreService.initializeApp(serviceAccount, databaseURL);

firestoreService.restore('sde sheet.json');