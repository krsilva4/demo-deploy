// Instala o servidor expresso
const express = require ('express');
const path = require ('caminho');

const app = express ();

// Serve apenas os arquivos estáticos que formam o diretório dist
app.use (express.static (__ dirname + '/ dist / <nome-de-app>'));

app.get ('/ *', function (req, res) {
    
res.sendFile (path.join (__ dirname + '/ dist / <nome-de-app> /index.html'));
});

// Inicie o aplicativo ouvindo na porta padrão do Heroku
app.listen (process.env.PORT || 8080);