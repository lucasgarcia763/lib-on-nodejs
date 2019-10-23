const express = require('express');
const app = express();

app.listen(3000, function(){
    console.log(`Servidor rodando na porta 3000`);
});

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
    response.send(`
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1>Books List</h1>
                    </body>
                </html>
            `);
});

//const http = require('http');
//
//const server = http.createServer(function(request, response) {
//    
//    let html = '';
//    
//    if(request.url == '/'){
//        html = `
//            <html>
//                <head>
//                    <meta charset="utf-8">
//                </head>
//                <body>
//                    <h1>LibOn - Your online library</h1>
//                </body>
//            </html>
//        `;
//    } else if(request.url == '/books'){
//        html = `
//            <html>
//                <head>
//                    <meta charset="utf-8">
//                </head>
//                <body>
//                    <h1>Books List</h1>
//                </body>
//            </html>
//        `;
//    }
//
//    response.end(html);
//
//});
//
//server.listen(3000);