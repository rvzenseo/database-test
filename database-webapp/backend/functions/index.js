const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');
const cors = require('cors');

admin.initializeApp();
const db = admin.firestore();

const app = express();
app.use(cors({ origin: true }));

// Endpoint to submit form data
app.post('/submit', async (req, res) => {
  try {
    const data = req.body;
    const docRef = await db.collection('formData').add(data);
    res.status(200).send({ id: docRef.id });
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint to fetch data by ID
app.get('/data/:id', async (req, res) => {
  try {
    const doc = await db.collection('formData').doc(req.params.id).get();
    if (!doc.exists) {
      res.status(404).send('No such document!');
    } else {
      res.status(200).send(doc.data());
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

exports.api = functions.https.onRequest(app);
