const admin = require('firebase-admin');
const serviceAccount = require("./serviceKeys.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const Staff = db.collection('Staff');
module.exports = Staff;

