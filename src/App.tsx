import "./App.css";
import GenericLoader from "./components/GenericContainer";
import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <GenericLoader url="/api/current-user" sourceName="user">
        <UserInfo />
      </GenericLoader>
      <GenericLoader url="/api/books/1" sourceName="book">
        <BookInfo />
      </GenericLoader>
    </>
  );
}

export default App;
