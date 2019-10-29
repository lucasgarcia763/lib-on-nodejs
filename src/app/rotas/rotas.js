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
        response.marko
        (
            require('../views/books/list/list.marko'),
            {
                books: [
                    {
                        id: 1,
                        title: 'Fundamentos do Node'
                    },
                    {
                        id: 2,
                        title: 'Node avançado'
                    }
                ]
            }
        );
    });
}