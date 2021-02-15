function getTotalBooksCount(books) 
{
  return books.length;
}

function getTotalAccountsCount(accounts) 
{
  return accounts.length;
}

function getBooksBorrowedCount(books)
{
  return books.filter((book)=>book.borrows.some((borrow)=>borrow.returned === false)).length;
}

// Helper function to make the object have name and count keys
function remapObject(anObject)
{
  const keys=Object.keys(anObject);
  const values=Object.values(anObject);
  const result = [];
  for (let i=0; i<keys.length;i++)
  {
    const name = keys[i];
    const count = values[i];
    result.push({name, count});
  }
  return result;
}


function getMostCommonGenres(books) 
{
  let commonGenres = books.reduce(function(count,book){count[book.genre] = (count[book.genre] || 0) + 1; return count; },{});
  
  let result = remapObject(commonGenres);

  result.sort((itemA, itemB)=>(itemB.count - itemA.count));
  if (result.length > 5) result.length = 5;
  
  return result;
}


/*
  [
    { name: "incididunt nostrud minim", count: 30 },
    { name: "culpa do sint", count: 30 },
    { name: "ullamco est minim", count: 29 },
    ...
  ]
*/
function getMostPopularBooks(books) 
{
  let commonBooks = books.reduce(function(count,book){count[book.title] = book.borrows.length; return count; },{});
  
  let result = remapObject(commonBooks);

  result.sort((itemA, itemB)=>(itemB.count - itemA.count));
  if (result.length > 5) result.length = 5;
  
  return result;
}

function getMostPopularAuthors(books, authors) 
{

  let commonAuthors = books.reduce(function(count,book){count[book.authorId] = (count[book.authorId] || 0) + book.borrows.length; return count; },{});

  const keys=Object.keys(commonAuthors);
  const values=Object.values(commonAuthors);
  const result = [];
  for (let i=0; i<keys.length;i++)
  {
    let object ={};
    const anAuthor = authors.find((author)=> parseInt(keys[i]) === author.id);
    object.name = anAuthor.name.first + " " + anAuthor.name.last;
    object.count = values[i];
    result.push(object);
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
