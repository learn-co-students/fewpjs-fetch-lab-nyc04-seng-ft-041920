function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json));
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })

  return books
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})


// // Find the 5th book in the series
// function findBookFive(books){
//   const main = document.querySelector('main')
//   const h2 = document.createElement('h2')
//   h2.innerHTML = `The fifth book is ${books[7].name}`
//   main.appendChild(h2);
  
//   return books
// }
// // Find the 1031st character in the series
// function find1031(books){
//   books.forEach( book =>{
//     book.find(({characters}) => characters === "https://anapioficeandfire.com/api/characters/1031")
//   })

//   return books
// }

// Find the total number of pages of all the books


