import { BooksType } from "../../data/books";

const SmallBookListItem = ({ book }: { book: BooksType }) => {
  return (
    <p>
      {book.name} / {book.price}
    </p>
  );
};

export default SmallBookListItem;
