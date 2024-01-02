import "./App.css";
import CurrentUserLoader from "./components/CurrentUserLoader";
import { UserInfo } from "./components/user-info";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
    </>
  );
}

export default App;
