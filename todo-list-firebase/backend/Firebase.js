const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://teste-firebase-cb075-default-rtdb.firebaseio.com/'
    });

const db = admin.database();
module.exports = db;