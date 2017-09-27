/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, "string", true, { a: 1 }, null];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(arg) {
    return arg;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(arr2, number) {
    return arr2[number];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr2 = ['string', false, 30, [1, 2, 'string'], { b: 5 }];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(myFunction(arr2, 0));
console.log(myFunction(arr2, 1));
console.log(myFunction(arr2, 2));
console.log(myFunction(arr2, 3));
console.log(myFunction(arr2, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
    var allBooks = {
        'It: A coisa': {
            quantidadePaginas: 1138,
            autor: "Stephen King",
            editora: "Viking"
        },
        'O Hobbit': {
            quantidadePaginas: 125,
            autor: "J. R. R. Tolkien",
            editora: "George Allen & Unwin (UK)"
        },
        'Hamlet': {
            quantidadePaginas: 152,
            autor: "JWilliam Shakespeare",
            editora: "Martin Claret"
        }
    }

    return !bookName ? allBooks : allBooks[bookName];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/* 
{ It:
   { quantidadePaginas: 1138,
     autor: 'Stephen King',
     editora: 'Viking' },
  Hobbit:
   { quantidadePaginas: 125,
     autor: 'J. R. R. Tolkien',
     editora: 'George Allen & Unwin (UK)' },
  Hamlet:
   { quantidadePaginas: 152,
     autor: 'JWilliam Shakespeare',
     editora: 'Martin Claret' } }
*/

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var bookName = "It: A coisa";
console.log("O livro " + bookName + " tem " + book(bookName).quantidadePaginas + " páginas!");


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log("O autor do livro " + bookName + " é " + book(bookName).autor + ".");


/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log("O livro " + bookName + " foi publicado pela editora " + book(bookName).editora + ".");