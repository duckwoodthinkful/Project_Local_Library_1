

function findAuthorById(authors, id) 
{
  return authors.find((author)=>author.id === id);
}

function findBookById(books, id)
{
  return books.find((book)=>book.id === id);
}

function partitionBooksByBorrowedStatus(books) 
{
  const returnedBooks = books.filter((book)=>book.borrows.every((borrow)=>borrow.returned === true));
  const checkedOutBooks = books.filter((book)=>book.borrows.some((borrow)=>borrow.returned === false));
  return [checkedOutBooks, returnedBooks];

}


function getBorrowersForBook(book, accounts) 
{
  const whatAccounts = accounts.filter((account)=>book.borrows.some((borrow)=>borrow.id === account.id));
  whatAccounts.forEach((account)=>account.returned = book.borrows.find((borrow)=>borrow.id === account.id).returned);
  return whatAccounts;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
