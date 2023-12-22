import { BooksType } from "../../data/books";

const LargeBookListItem = ({ book }: { book: BooksType }) => {
  return (
    <>
      <h2>Name : {book.name}</h2>
      <p>Price : {book.price}</p>
      <h3>Title : {book.title}</h3>
      <p># of Pages : {book.pages}</p>
    </>
  );
};

export default LargeBookListItem;
