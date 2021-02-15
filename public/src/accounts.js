
function findAccountById(accounts, id) 
{
  return accounts.find((account)=>account.id === id);
}

function sortAccountsByLastName(accounts) 
{
  accounts.sort((accountA, accountB) => accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1);
  return accounts;
}


function getTotalNumberOfBorrows(account, books)
{
  let count = 0;
  books.forEach((book)=>count+=book.borrows.filter((borrow)=>borrow.id === account.id).length);
  return count;

}

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
