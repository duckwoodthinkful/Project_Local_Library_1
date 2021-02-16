// Given
// - An array of accounts.
// - An ID of a single account.

// It returns the account object that has the matching ID.
function findAccountById(accounts, id) 
{
  return accounts.find((account)=>account.id === id);
}


// Given
// - An array of accounts.

// It returns a sorted array of objects. The objects are sorted alphabetically by last name.
function sortAccountsByLastName(accounts) 
{
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}


// Given
// - An account object.
// - An array of all books objects.

// It returns a _number_ that represents the number of times the account's ID appears in any book's `borrow` array.
function getTotalNumberOfBorrows(account, books)
{
  let count = 0;
  books.forEach((book)=>count+=book.borrows.filter((borrow)=>borrow.id === account.id).length);
  return count;

}


// Given
// - An account object.
// - An array of all books objects.
// - An array of all author objects.

// It returns an array of books and authors that represents all books _currently checked out_ by the given account.
function getBooksPossessedByAccount(account, books, authors)
{
  const whichBooks = books.filter((book)=>book.borrows.some((borrow)=>((borrow.id === account.id) && (borrow.returned === false))) );
  whichBooks.forEach((book) => book.author = authors.find((author)=> author.id === book.authorId));
  return whichBooks; 
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
