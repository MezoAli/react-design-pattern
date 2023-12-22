// import LargeAuthorListItem from "./components/authors/LargeListItem";
// import SmallAuthorListItem from "./components/authors/SmallListItem";
import Modal from "./components/Modal";
import LargeBookListItem from "./components/books/LargeListItem";
// import SmallBookListItem from "./components/books/SmallListItem";
// import RegularList from "./components/lists/RegularList";
// import { authors } from "./data/authors";
import { books } from "./data/books";

function App() {
  return (
    <>
      <Modal>
        <LargeBookListItem book={books[0]} />
      </Modal>
    </>
  );
}

export default App;
