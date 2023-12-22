import { AuthorsType } from "../../data/authors";
import { BooksType } from "../../data/books";

interface RegularListProps {
  items: AuthorsType[] | BooksType[];
  sourceName: "author" | "book";
  ItemComponent: any;
}

const RegularList = ({
  items,
  sourceName,
  ItemComponent,
}: RegularListProps) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </>
  );
};

export default RegularList;
