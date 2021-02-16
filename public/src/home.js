
// Given
// - An array of books.

// It returns a number that represents the number of book objects inside of the array.
function getTotalBooksCount(books) 
{
  return books.length;
}

// Given
// - An array of accounts.

// It returns a number that represents the number of account objects inside of the array.
function getTotalAccountsCount(accounts) 
{
  return accounts.length;
}

// Given
// - An array of books.

// It returns a number that represents the number of books _that are currently checked out of the library.
function getBooksBorrowedCount(books)
{
  return books.filter((book)=>book.borrows.some((borrow)=>borrow.returned === false)).length;
}

// Helper function to make the object have name and count keys
function remapObject(anObject)
{
  return anObject.map((key) => {return {name: key, count: anObject.key}});
}

// Given
// - An array of books.

// It returns an array containing five objects or fewer that represents the most common occurring genres, 
// ordered from most common to least.
function getMostCommonGenres(books) 
{
  let commonGenres = books.reduce(function(count,book){count[book.genre] = (count[book.genre] || 0) + 1; return count; },{});
  let result = remapObject(commonGenres);

  result.sort((itemA, itemB)=>(itemB.count - itemA.count));
  if (result.length > 5) result.length = 5; // maybe use slice.
  
  return result;
}


// Given
// - An array of books.

// It returns an array containing five objects or fewer that represents the most popular books in the library.
function getMostPopularBooks(books) 
{
  let commonBooks = books.reduce(function(count,book){count[book.title] = book.borrows.length; return count; },{});
  
  let result = remapObject(commonBooks);

  result.sort((itemA, itemB)=>(itemB.count - itemA.count));
  if (result.length > 5) result.length = 5;
  
  return result;
}


// Given
// - An array of books.
// - An array of authors.

// It returns an array containing five objects or fewer that represents the most popular authors whose books have been 
// checked out the most. 
function getMostPopularAuthors(books, authors) 
{

  let commonAuthors = books.reduce(function(count,book){count[book.authorId] = (count[book.authorId] || 0) + book.borrows.length; return count; },{});

  const result = [];
  for (const key in commonAuthors)
  {
    const anAuthor = authors.find((author)=> key == author.id);
    result.push({name: anAuthor.name.first + " " + anAuthor.name.last, count: commonAuthors[key]});
  }

  result.sort((itemA, itemB)=>(itemB.count - itemA.count));

  if (result.length > 5) result.length = 5;

  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
