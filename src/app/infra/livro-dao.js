class LivroDao {

    constructor(db){
        this._db = db;
    }

    lista(){
        
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros', 
                (erro, resultados) => {
                    
                    if(erro){
                        return reject('Não foi possível listar os livros!');
                    }

                    return resolve(resultados);
                }
            );
        });
    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            this._db.run(`
                    INSERT INTO livros (
                        titulo,
                        preco,
                        descricao
                    ) VALUES (?, ?, ?)
                `, [
                    livro.titulo,
                    livro.preco,
                    livro.descricao        
                ], 
                function(erro){
                    if(erro){
                        console.log(erro);
                        return reject('Não foi possível adicionar o livro!');
                    }

                    resolve();
                }    
            );
        });
    }

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.get(
                `SELECT * FROM livros WHERE id = ?`, 
                [id], 
                (erro, livro) => {
                    if(erro){
                        return reject('Não foi possível buscar o livro!');
                    }

                    return resolve(livro);
                }    
            );
        })
    }
}

module.exports = LivroDao;