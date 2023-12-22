import LargeAuthorListItem from "./components/authors/LargeListItem";
import SmallAuthorListItem from "./components/authors/SmallListItem";
import RegularList from "./components/lists/RegularList";
import { authors } from "./data/authors";

function App() {
  return (
    <>
      <RegularList
        items={authors}
        ItemComponent={SmallAuthorListItem}
        sourceName="author"
      />
      <hr />
      <RegularList
        items={authors}
        ItemComponent={LargeAuthorListItem}
        sourceName="author"
      />
    </>
  );
}

export default App;
