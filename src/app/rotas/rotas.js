const LivroDao = require('../infra/livro-dao');

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

        const livroDao = new LivroDao(db);
        
        livroDao.lista()
        .then(
            livros => response.marko (
                require('../views/books/list/list.marko'),
                {
                    books: livros
                }
            )
        )
        .catch(erro => console.log(erro));
    });

    app.post('/books', function(request, response){
        console.log(request.body);

        const livroDao = new LivroDao(db);
        
        livroDao.adiciona(request.body)
        .then(response.redirect('/books'))
        .catch(erro => console.log(erro));
    });

    app.get('/books/form', function(request, response) {
        response.marko(require('../views/form/form.marko'));
    });
}