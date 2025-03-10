const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir les fichiers statiques du frontend
app.use(express.static(path.join(__dirname, '../public')));

// API simple
app.get('/api/message', (req, res) => {
    res.json({ message: "Ceci est un message du backend Node.js !" });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
