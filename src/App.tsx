import "./App.css";
import CurrentUserLoader from "./components/CurrentUserLoader";
import UserLoader from "./components/UserLoader";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <UserLoader userId="1">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
