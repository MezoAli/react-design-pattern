import "./App.css";
import { logProps } from "./components/Higher-Order-Component";
import { BookInfo } from "./components/book-info";
import { UserInfo } from "./components/user-info";

const UserInfoWrapper = logProps(UserInfo);
const BookInfoWrapper = logProps(BookInfo);
function App() {
  return (
    <>
      <UserInfoWrapper sourceName="user" url="/api/current-user" />
      <BookInfoWrapper sourceName="book" url="/api/books/1" />
    </>
  );
}

export default App;
