const db = require('../../config/database');

module.exports = (app) => {
    app.get('/', function(request, response){
        response.send(`
                    <html>
                        <head>
                            <meta charset="utf-8">
                        </head>
                        <body>
                            <h1>LibOn - Your online library</h1>
                        </body>
                    </html>
                `);
    });
    
    app.get('/books', function(request, response){

        db.all('SELECT * FROM livros', function(erro, resultados){
            response.marko
            (
                require('../views/books/list/list.marko'),
                {
                    books: resultados
                }
            );
        });

    });
}