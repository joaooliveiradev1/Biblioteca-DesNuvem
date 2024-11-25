const bookList = document.querySelector('.books')

// eslint-disable-next-line no-unused-vars
const books = fetch('./books.json').then(async response => response.json()).then(livros=> livros.forEach(livro => {
    const li = document.createElement('li');
    li.className = 'book';
    li.addEventListener('click', () => {
        window.open(livro.easterEgg)
    })

    const img = document.createElement('img');
    img.src = livro.url;
    
    const titulo = document.createElement('p');
    titulo.className = 'koh-santepheap-light';
    titulo.textContent = livro.titulo;

    const autor = document.createElement('p');
    autor.className = 'koh-santepheap-regular';
    autor.textContent = livro.autor;

    const ano = document.createElement('p');
    ano.className = 'koh-santepheap-regular';
    ano.textContent = livro.ano_publicacao;

    li.append(img, titulo, autor, ano)
    bookList.appendChild(li)
}))

const title = document.querySelector('#title')
title.addEventListener('click', e => window.location.href = '../index.html')