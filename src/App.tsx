// import LargeAuthorListItem from "./components/authors/LargeListItem";
// import SmallAuthorListItem from "./components/authors/SmallListItem";
import LargeBookListItem from "./components/books/LargeListItem";
import SmallBookListItem from "./components/books/SmallListItem";
import RegularList from "./components/lists/RegularList";
// import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <>
      {/* <RegularList
        items={authors}
        ItemComponent={SmallAuthorListItem}
        sourceName="author"
      />
      <hr />
      <RegularList
        items={authors}
        ItemComponent={LargeAuthorListItem}
        sourceName="author"
      /> */}
      <RegularList
        items={books}
        ItemComponent={SmallBookListItem}
        sourceName="book"
      />
      <hr />
      <RegularList
        items={books}
        ItemComponent={LargeBookListItem}
        sourceName="book"
      />
    </>
  );
}

export default App;
