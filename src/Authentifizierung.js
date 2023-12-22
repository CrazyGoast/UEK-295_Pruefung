const express = require('express');
const session = require('express-session');

// Express Router erstellen
const router = express.Router();

// Middleware einrichten: JSON-Parser und Sitzungsverwaltung
router.use(express.json());
router.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {},
}));

// Überprprüft ob das Passwort m295 ist. Wenn nicht wird "Invalid credentials" ausgegeben.
router.post('/login', (request, response) => {
  const { email, password } = request.body;
  if (password === 'm295') {
    request.session.email = email;
    return response.status(200).json({ email: request.session.email });
  }
  return response.status(401).json({ error: 'Invalid credentials.' });
});

// Hier wird überprüft ob man schon eingelogt ist, wenn ja
// wird die vorhanden, E-Mail als Antwort senden.

router.get('/verify', (request, response) => {
  // Check if email is set in session
  if (request.session.email) {
    return response.status(200).json({ email: request.session.email });
  }
// Fals man nicht eingelogt ist wird ausgegeben " Not logged in".
  return response.status(401).json({ error: 'Not logged in' });
});

// Mit /logout wird die E-Mail gelöscht und es wird  "Logged out successfully" ausgegeben.
router.delete('/logout', (request, response) => {
  if (request.session.email) {
    request.session.email = null;

    return response.status(200).send('Logged out successfully.');
  }

  return response.status(401).json({ error: 'Not logged in' });
});

// Export des Router-Objekts für die Verwendung in anderen Dateien
module.exports = router;
