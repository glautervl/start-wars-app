const express = require("express");
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 5000;
express()
    .use(cors())
    .use(express.static(path.join(__dirname, "dist")))
    .get('/prod-importmap', (req, res) => {
        res.send({
            imports: {
                'react': 'https://cdn.jsdelivr.net/npm/react@17.0.1/umd/react.production.min.js',
                'react-dom': 'https://cdn.jsdelivr.net/npm/react-dom@17.0.1/umd/react-dom.production.min.js',
                'single-spa': 'https://cdn.jsdelivr.net/npm/single-spa@5.8.2/lib/system/single-spa.min.js',
                '@brunopeck/root-config': 'http://localhost:5000/brunopeck-root-config.js',
                '@brunopeck/root-config/': 'http://localhost:5000/',
                '@brunopeck/navbar': 'http://localhost:3000/brunopeck-navbar.js',
                '@brunopeck/navbar/': 'http://localhost:3000/'
            }
        });
    })
    .get("*", (req, res) => {
        res.sendFile("index.html", { root: "dist" });
    })
    .listen(PORT, () => console.log(`Listening on ${PORT}`));
