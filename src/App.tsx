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
    </>
  );
}

export default App;
