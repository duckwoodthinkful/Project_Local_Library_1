// Given
// - An array of authors.
// - An ID of a single author.

// It returns the author object that has the matching ID.
function findAuthorById(authors, id) 
{
  return authors.find((author)=>author.id === id);
}

// Given
// - An array of books.
// - An ID of a single book.

// It returns the book object that has the matching ID.
function findBookById(books, id)
{
  return books.find((book)=>book.id === id);
}


// Given
// - An array of books.

// It returns an array with two arrays inside of it. All of the inputted books are present in either the first or second array.
// The first array contains books _that have been loaned out, and are not yet returned_ while the second array contains 
// books _that have been returned.
function partitionBooksByBorrowedStatus(books) 
{
  const returnedBooks = books.filter((book)=>book.borrows.every((borrow)=>borrow.returned === true));
  const checkedOutBooks = books.filter((book)=>book.borrows.some((borrow)=>borrow.returned === false));
  return [checkedOutBooks, returnedBooks];

}

// Given
// - A book object.
// - An array of all accounts.

// It should return an array of all the transactions from the book's `borrows` key. 
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
