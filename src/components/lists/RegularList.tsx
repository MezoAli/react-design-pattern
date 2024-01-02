import { AuthorsType } from "../../data/authors";
import { BooksType } from "../../data/books";

type RegularListProps = (
  | {
      items: BooksType[];
      sourceName: "book";
    }
  | { items: AuthorsType[]; sourceName: "author" }
) & {
  ItemComponent: React.ComponentType | any;
};

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
