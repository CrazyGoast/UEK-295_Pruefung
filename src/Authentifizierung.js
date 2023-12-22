const express = require('express');
const session = require('express-session');

const router = express.Router();

router.use(express.json());
router.use(session({
  secret: 'supersecret',
  resave: false,
  saveUninitialized: false,
  cookie: {},
}));

router.post('/login', (request, response) => {
  const { email, password } = request.body;
  if (password === 'm295') {
    request.session.email = email;
    return response.status(200).json({ email: request.session.email });
  }
  return response.status(401).json({ error: 'Invalid credentials.' });
});

router.get('/verify', (request, response) => {
  // Check if email is set in session
  if (request.session.email) {
    return response.status(200).json({ email: request.session.email });
  }

  return response.status(401).json({ error: 'Not logged in' });
});

router.delete('/logout', (request, response) => {
  // Check if email is set in session
  if (request.session.email) {
    // Reset link of session to email
    request.session.email = null;

    return response.status(200).send('Logged out successfully.');
  }

  return response.status(401).json({ error: 'Not logged in' });
});

module.exports = router;
