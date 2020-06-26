const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/poc-todo-app'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist/poc-todo-app/' });
})

app.listen(process.env.PORT || 8080);